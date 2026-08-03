import { useState } from 'react';
import { RotateCcw, Copy, Check } from 'lucide-react';

const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtInt = (n: number) => Math.round(n).toLocaleString('en-US');

function CalcShell({ title, children, results, onReset, onCopy, copied }: {
  title: string; children: React.ReactNode; results: React.ReactNode; onReset: () => void; onCopy: () => void; copied: boolean;
}) {
  return (
    <div className="card p-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-ink-900 dark:text-ink-50 mb-4">Inputs</h3>
          {children}
          <div className="flex gap-2 mt-5">
            <button onClick={onReset} className="btn-secondary"><RotateCcw size={16} /> Reset</button>
            <button onClick={onCopy} className="btn-ghost"><Copy size={16} /> {copied ? <Check size={16} className="text-accent-500" /> : 'Copy result'}</button>
          </div>
        </div>
        <div className="bg-ink-50 dark:bg-ink-900/50 rounded-2xl p-6">
          <h3 className="font-bold text-ink-900 dark:text-ink-50 mb-4">Results</h3>
          {results}
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = 'number', prefix, suffix, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; prefix?: string; suffix?: string; placeholder?: string;
}) {
  return (
    <div className="mb-4">
      <label className="label">{label}</label>
      <div className="relative">
        {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">{prefix}</span>}
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={`input ${prefix ? '!pl-8' : ''} ${suffix ? '!pr-12' : ''}`} />
        {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm">{suffix}</span>}
      </div>
    </div>
  );
}

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-2 ${highlight ? 'text-brand-600 dark:text-brand-400 font-bold text-lg' : 'text-sm'}`}>
      <span className={highlight ? '' : 'text-ink-500 dark:text-ink-400'}>{label}</span>
      <span className={highlight ? '' : 'font-semibold text-ink-800 dark:text-ink-100'}>{value}</span>
    </div>
  );
}

function SimpleBar({ percent, color = 'bg-brand-500' }: { percent: number; color?: string }) {
  return <div className="h-2 rounded-full bg-ink-200 dark:bg-ink-700 overflow-hidden mt-2"><div className={`h-full ${color} transition-all`} style={{ width: `${Math.min(percent, 100)}%` }} /></div>;
}

export function CalculatorEngine({ slug, onCopy, copied }: { slug: string; onCopy: (text: string) => void; copied: boolean }) {
  // Generic state
  const [vals, setVals] = useState<Record<string, string>>({});
  const set = (k: string) => (v: string) => setVals((s) => ({ ...s, [k]: v }));
  const n = (k: string, d = 0) => parseFloat(vals[k] || '') || d;
  const reset = () => setVals({});

  // EMI / Loan Calculator
  if (slug === 'emi' || slug === 'loan') {
    const principal = n('principal'), rate = n('rate'), years = n('years');
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const emi = principal > 0 && monthlyRate > 0 && months > 0 ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1) : 0;
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;
    const copyText = `Monthly Payment: $${fmt(emi)}, Total Interest: $${fmt(totalInterest)}, Total Payment: $${fmt(totalPayment)}`;
    return <CalcShell title={slug === 'emi' ? 'EMI Calculator' : 'Loan Calculator'} onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Loan Amount" prefix="$" value={vals.principal || ''} onChange={set('principal')} placeholder="100000" /><Field label="Annual Interest Rate" suffix="%" value={vals.rate || ''} onChange={set('rate')} placeholder="7.5" /><Field label="Loan Term" suffix="years" value={vals.years || ''} onChange={set('years')} placeholder="5" /></>}
      results={<><ResultRow label="Monthly Payment" value={`$${fmt(emi)}`} highlight /><ResultRow label="Total Interest" value={`$${fmt(totalInterest)}`} /><ResultRow label="Total Payment" value={`$${fmt(totalPayment)}`} /><div className="mt-4"><p className="text-xs text-ink-400 mb-1">Principal vs Interest</p><SimpleBar percent={(principal / totalPayment) * 100} color="bg-accent-500" /><div className="flex justify-between text-xs mt-1"><span className="text-accent-600">Principal {((principal / totalPayment) * 100).toFixed(0)}%</span><span className="text-brand-600">Interest {((totalInterest / totalPayment) * 100).toFixed(0)}%</span></div></div></>} />;
  }

  // Mortgage Calculator
  if (slug === 'mortgage') {
    const price = n('price'), down = n('down'), rate = n('rate'), years = n('years', 30);
    const principal = price - down;
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const payment = principal > 0 && monthlyRate > 0 ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1) : 0;
    const total = payment * months;
    const interest = total - principal;
    const copyText = `Monthly Payment: $${fmt(payment)}, Total Interest: $${fmt(interest)}`;
    return <CalcShell title="Mortgage Calculator" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Home Price" prefix="$" value={vals.price || ''} onChange={set('price')} placeholder="400000" /><Field label="Down Payment" prefix="$" value={vals.down || ''} onChange={set('down')} placeholder="80000" /><Field label="Interest Rate" suffix="%" value={vals.rate || ''} onChange={set('rate')} placeholder="6.5" /><Field label="Loan Term" suffix="years" value={vals.years || ''} onChange={set('years')} placeholder="30" /></>}
      results={<><ResultRow label="Loan Amount" value={`$${fmt(principal)}`} /><ResultRow label="Monthly Payment" value={`$${fmt(payment)}`} highlight /><ResultRow label="Total Interest" value={`$${fmt(interest)}`} /><ResultRow label="Total Cost" value={`$${fmt(total + down)}`} /></>} />;
  }

  // Compound Interest Calculator
  if (slug === 'compound-interest' || slug === 'investment' || slug === 'savings') {
    const principal = n('principal'), monthly = n('monthly'), rate = n('rate'), years = n('years');
    const r = rate / 100 / 12;
    const months = years * 12;
    let balance = principal;
    const chartData: number[] = [balance];
    for (let i = 0; i < months; i++) { balance = balance * (1 + r) + monthly; chartData.push(balance); }
    const totalContributions = principal + monthly * months;
    const interestEarned = balance - totalContributions;
    const copyText = `Future Value: $${fmt(balance)}, Interest Earned: $${fmt(interestEarned)}`;
    return <CalcShell title={slug === 'compound-interest' ? 'Compound Interest' : slug === 'investment' ? 'Investment' : 'Savings'} onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Initial Amount" prefix="$" value={vals.principal || ''} onChange={set('principal')} placeholder="10000" /><Field label="Monthly Contribution" prefix="$" value={vals.monthly || ''} onChange={set('monthly')} placeholder="500" /><Field label="Annual Return Rate" suffix="%" value={vals.rate || ''} onChange={set('rate')} placeholder="7" /><Field label="Time Period" suffix="years" value={vals.years || ''} onChange={set('years')} placeholder="20" /></>}
      results={<><ResultRow label="Future Value" value={`$${fmt(balance)}`} highlight /><ResultRow label="Total Contributions" value={`$${fmt(totalContributions)}`} /><ResultRow label="Interest Earned" value={`$${fmt(interestEarned)}`} /><div className="mt-4"><div className="h-32 flex items-end gap-px">{chartData.filter((_, i) => i % Math.max(1, Math.floor(months / 30)) === 0).map((v, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-accent-400" style={{ height: `${(v / balance) * 100}%` }} />)}</div></div></>} />;
  }

  // SIP Calculator
  if (slug === 'sip') {
    const monthly = n('monthly'), rate = n('rate'), years = n('years');
    const r = rate / 100 / 12; const months = years * 12;
    const futureValue = monthly * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
    const totalInvested = monthly * months;
    const gains = futureValue - totalInvested;
    const copyText = `Maturity Value: $${fmt(futureValue)}, Total Invested: $${fmt(totalInvested)}, Gains: $${fmt(gains)}`;
    return <CalcShell title="SIP Calculator" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Monthly Investment" prefix="$" value={vals.monthly || ''} onChange={set('monthly')} placeholder="500" /><Field label="Expected Annual Return" suffix="%" value={vals.rate || ''} onChange={set('rate')} placeholder="12" /><Field label="Investment Period" suffix="years" value={vals.years || ''} onChange={set('years')} placeholder="10" /></>}
      results={<><ResultRow label="Maturity Value" value={`$${fmt(futureValue)}`} highlight /><ResultRow label="Total Invested" value={`$${fmt(totalInvested)}`} /><ResultRow label="Estimated Gains" value={`$${fmt(gains)}`} /></>} />;
  }

  // Budget Planner (50/30/20)
  if (slug === 'budget-planner') {
    const income = n('income');
    const needs = income * 0.5, wants = income * 0.3, savings = income * 0.2;
    const copyText = `Needs: $${fmt(needs)}, Wants: $${fmt(wants)}, Savings: $${fmt(savings)}`;
    return <CalcShell title="Budget Planner (50/30/20)" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<Field label="Monthly After-Tax Income" prefix="$" value={vals.income || ''} onChange={set('income')} placeholder="5000" />}
      results={<><ResultRow label="Needs (50%)" value={`$${fmt(needs)}`} highlight /><p className="text-xs text-ink-400 -mt-1 mb-2">Housing, food, utilities, insurance</p><ResultRow label="Wants (30%)" value={`$${fmt(wants)}`} highlight /><p className="text-xs text-ink-400 -mt-1 mb-2">Dining, entertainment, hobbies</p><ResultRow label="Savings (20%)" value={`$${fmt(savings)}`} highlight /><p className="text-xs text-ink-400 -mt-1">Emergency fund, retirement, debt payoff</p></>} />;
  }

  // Retirement Calculator
  if (slug === 'retirement') {
    const current = n('current'), monthly = n('monthly'), rate = n('rate'), years = n('years');
    const r = rate / 100 / 12; const months = years * 12;
    const future = current * Math.pow(1 + r, months) + monthly * ((Math.pow(1 + r, months) - 1) / r);
    const annualWithdrawal = future * 0.04;
    const copyText = `Retirement Savings: $${fmt(future)}, Annual Income (4%): $${fmt(annualWithdrawal)}`;
    return <CalcShell title="Retirement Calculator" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Current Savings" prefix="$" value={vals.current || ''} onChange={set('current')} placeholder="50000" /><Field label="Monthly Contribution" prefix="$" value={vals.monthly || ''} onChange={set('monthly')} placeholder="1000" /><Field label="Expected Annual Return" suffix="%" value={vals.rate || ''} onChange={set('rate')} placeholder="7" /><Field label="Years Until Retirement" suffix="years" value={vals.years || ''} onChange={set('years')} placeholder="30" /></>}
      results={<><ResultRow label="Retirement Savings" value={`$${fmt(future)}`} highlight /><ResultRow label="Annual Income (4% rule)" value={`$${fmt(annualWithdrawal)}`} /><ResultRow label="Monthly Income" value={`$${fmt(annualWithdrawal / 12)}`} /></>} />;
  }

  // Debt Payoff / Credit Card Interest
  if (slug === 'debt-payoff' || slug === 'credit-card-interest') {
    const balance = n('balance'), rate = n('rate'), payment = n('payment');
    const monthlyRate = rate / 100 / 12;
    if (balance <= 0 || monthlyRate <= 0 || payment <= 0) return <CalcShell title={slug === 'debt-payoff' ? 'Debt Payoff' : 'Credit Card Interest'} onReset={reset} onCopy={() => onCopy('Enter all values')} copied={copied}
      children={<><Field label="Current Balance" prefix="$" value={vals.balance || ''} onChange={set('balance')} placeholder="5000" /><Field label="Annual Interest Rate" suffix="%" value={vals.rate || ''} onChange={set('rate')} placeholder="22" /><Field label="Monthly Payment" prefix="$" value={vals.payment || ''} onChange={set('payment')} placeholder="200" /></>}
      results={<p className="text-ink-400 text-sm">Enter all values to see results</p>} />;
    if (payment <= balance * monthlyRate) return <CalcShell title={slug === 'debt-payoff' ? 'Debt Payoff' : 'Credit Card Interest'} onReset={reset} onCopy={() => onCopy('Payment too low')} copied={copied}
      children={<><Field label="Current Balance" prefix="$" value={vals.balance || ''} onChange={set('balance')} placeholder="5000" /><Field label="Annual Interest Rate" suffix="%" value={vals.rate || ''} onChange={set('rate')} placeholder="22" /><Field label="Monthly Payment" prefix="$" value={vals.payment || ''} onChange={set('payment')} placeholder="200" /></>}
      results={<p className="text-red-500 text-sm">Monthly payment is too low to pay off the debt. Increase your payment.</p>} />;
    let bal = balance, totalInterest = 0, months = 0;
    while (bal > 0 && months < 1200) { const interest = bal * monthlyRate; totalInterest += interest; bal = bal + interest - payment; if (bal < 0) bal = 0; months++; }
    const years = Math.floor(months / 12), remMonths = months % 12;
    const copyText = `Payoff Time: ${years}y ${remMonths}m, Total Interest: $${fmt(totalInterest)}`;
    return <CalcShell title={slug === 'debt-payoff' ? 'Debt Payoff' : 'Credit Card Interest'} onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Current Balance" prefix="$" value={vals.balance || ''} onChange={set('balance')} placeholder="5000" /><Field label="Annual Interest Rate" suffix="%" value={vals.rate || ''} onChange={set('rate')} placeholder="22" /><Field label="Monthly Payment" prefix="$" value={vals.payment || ''} onChange={set('payment')} placeholder="200" /></>}
      results={<><ResultRow label="Payoff Time" value={`${years} years, ${remMonths} months`} highlight /><ResultRow label="Total Interest Paid" value={`$${fmt(totalInterest)}`} /><ResultRow label="Total Paid" value={`$${fmt(balance + totalInterest)}`} /></>} />;
  }

  // Inflation Calculator
  if (slug === 'inflation') {
    const amount = n('amount'), rate = n('rate', 3), years = n('years');
    const futureValue = amount * Math.pow(1 + rate / 100, years);
    const lostValue = futureValue - amount;
    const purchasingPower = amount / Math.pow(1 + rate / 100, years);
    const copyText = `Future Value: $${fmt(futureValue)}, Purchasing Power: $${fmt(purchasingPower)}`;
    return <CalcShell title="Inflation Calculator" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Current Amount" prefix="$" value={vals.amount || ''} onChange={set('amount')} placeholder="10000" /><Field label="Inflation Rate" suffix="%" value={vals.rate || '3'} onChange={set('rate')} placeholder="3" /><Field label="Time Period" suffix="years" value={vals.years || ''} onChange={set('years')} placeholder="20" /></>}
      results={<><ResultRow label="Future Value" value={`$${fmt(futureValue)}`} /><ResultRow label="Value Lost to Inflation" value={`$${fmt(lostValue)}`} highlight /><ResultRow label="Real Purchasing Power" value={`$${fmt(purchasingPower)}`} /></>} />;
  }

  // Net Worth Calculator
  if (slug === 'net-worth') {
    const assets = ['cash', 'investments', 'property', 'vehicles', 'other'].reduce((s, k) => s + n(k), 0);
    const liabilities = ['mortgage', 'carLoan', 'creditCard', 'studentLoan', 'otherDebt'].reduce((s, k) => s + n(k), 0);
    const netWorth = assets - liabilities;
    const copyText = `Net Worth: $${fmt(netWorth)}`;
    return <CalcShell title="Net Worth Calculator" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><p className="text-xs font-bold text-ink-400 uppercase mb-2">Assets</p><Field label="Cash & Savings" prefix="$" value={vals.cash || ''} onChange={set('cash')} /><Field label="Investments" prefix="$" value={vals.investments || ''} onChange={set('investments')} /><Field label="Property" prefix="$" value={vals.property || ''} onChange={set('property')} /><Field label="Vehicles" prefix="$" value={vals.vehicles || ''} onChange={set('vehicles')} /><p className="text-xs font-bold text-ink-400 uppercase mb-2 mt-4">Liabilities</p><Field label="Mortgage" prefix="$" value={vals.mortgage || ''} onChange={set('mortgage')} /><Field label="Car Loan" prefix="$" value={vals.carLoan || ''} onChange={set('carLoan')} /><Field label="Credit Card Debt" prefix="$" value={vals.creditCard || ''} onChange={set('creditCard')} /><Field label="Student Loan" prefix="$" value={vals.studentLoan || ''} onChange={set('studentLoan')} /></>}
      results={<><ResultRow label="Total Assets" value={`$${fmt(assets)}`} /><ResultRow label="Total Liabilities" value={`$${fmt(liabilities)}`} /><div className="border-t border-ink-200 dark:border-ink-700 my-2" /><ResultRow label="Net Worth" value={`$${fmt(netWorth)}`} highlight /></>} />;
  }

  // ROI Calculator
  if (slug === 'roi') {
    const initial = n('initial'), final = n('final'), years = n('years', 1);
    const gain = final - initial;
    const roi = initial > 0 ? (gain / initial) * 100 : 0;
    const annualized = initial > 0 && years > 0 ? (Math.pow(final / initial, 1 / years) - 1) * 100 : 0;
    const copyText = `ROI: ${fmt(roi)}%, Annualized: ${fmt(annualized)}%`;
    return <CalcShell title="ROI Calculator" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Initial Investment" prefix="$" value={vals.initial || ''} onChange={set('initial')} placeholder="10000" /><Field label="Final Value" prefix="$" value={vals.final || ''} onChange={set('final')} placeholder="15000" /><Field label="Time Period" suffix="years" value={vals.years || ''} onChange={set('years')} placeholder="3" /></>}
      results={<><ResultRow label="Total Gain/Loss" value={`$${fmt(gain)}`} /><ResultRow label="Total ROI" value={`${fmt(roi)}%`} highlight /><ResultRow label="Annualized Return" value={`${fmt(annualized)}%`} /></>} />;
  }

  // Tax Calculator (simplified US)
  if (slug === 'tax') {
    const income = n('income');
    const brackets = [
      { rate: 0.10, up: 11600 }, { rate: 0.12, up: 47150 }, { rate: 0.22, up: 100525 },
      { rate: 0.24, up: 191950 }, { rate: 0.32, up: 243725 }, { rate: 0.35, up: 609350 }, { rate: 0.37, up: Infinity },
    ];
    let tax = 0, remaining = income;
    for (const b of brackets) { const taxable = Math.min(remaining, b.up - (brackets[brackets.indexOf(b) - 1]?.up || 0)); if (taxable <= 0) break; tax += taxable * b.rate; remaining -= taxable; }
    const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
    const afterTax = income - tax;
    const copyText = `Estimated Tax: $${fmt(tax)}, Effective Rate: ${fmt(effectiveRate)}%`;
    return <CalcShell title="Tax Calculator (Single Filer)" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<Field label="Annual Income" prefix="$" value={vals.income || ''} onChange={set('income')} placeholder="75000" />}
      results={<><ResultRow label="Estimated Federal Tax" value={`$${fmt(tax)}`} highlight /><ResultRow label="Effective Tax Rate" value={`${fmt(effectiveRate)}%`} /><ResultRow label="After-Tax Income" value={`$${fmt(afterTax)}`} /><p className="text-xs text-ink-400 mt-3">Estimate only. Does not include deductions, credits, state tax, or FICA.</p></>} />;
  }

  // Currency Converter (static rates)
  if (slug === 'currency-converter') {
    const rates: Record<string, number> = { USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, CAD: 1.36, AUD: 1.52, INR: 83.2, CNY: 7.24, CHF: 0.88, MXN: 17.1 };
    const amount = n('amount', 0);
    const from = vals.from || 'USD';
    const to = vals.to || 'EUR';
    const result = (amount / rates[from]) * rates[to];
    const copyText = `${amount} ${from} = ${fmt(result)} ${to}`;
    return <CalcShell title="Currency Converter" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Amount" value={vals.amount || ''} onChange={set('amount')} placeholder="100" /><div className="grid grid-cols-2 gap-3"><div><label className="label">From</label><select className="input" value={vals.from || 'USD'} onChange={(e) => set('from')(e.target.value)}>{Object.keys(rates).map((c) => <option key={c} value={c}>{c}</option>)}</select></div><div><label className="label">To</label><select className="input" value={vals.to || 'EUR'} onChange={(e) => set('to')(e.target.value)}>{Object.keys(rates).map((c) => <option key={c} value={c}>{c}</option>)}</select></div></div></>}
      results={<><ResultRow label={`${amount} ${from} equals`} value={`${fmt(result)} ${to}`} highlight /><p className="text-xs text-ink-400 mt-3">Rates are approximate and for educational purposes only. Use live rates for actual transactions.</p></>} />;
  }

  // Percentage Calculator
  if (slug === 'percentage') {
    const a = n('a'), b = n('b');
    const pctOfB = b > 0 ? (a / b) * 100 : 0;
    const pctChange = a > 0 ? ((b - a) / a) * 100 : 0;
    const copyText = `${a} is ${fmt(pctOfB)}% of ${b}. Change: ${fmt(pctChange)}%`;
    return <CalcShell title="Percentage Calculator" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Value A" value={vals.a || ''} onChange={set('a')} placeholder="50" /><Field label="Value B" value={vals.b || ''} onChange={set('b')} placeholder="200" /></>}
      results={<><ResultRow label="A is what % of B" value={`${fmt(pctOfB)}%`} highlight /><ResultRow label="% Change A to B" value={`${fmt(pctChange)}%`} /></>} />;
  }

  // Salary Calculator
  if (slug === 'salary') {
    const hourly = n('hourly');
    const weekly = hourly * 40;
    const monthly = weekly * 52 / 12;
    const annual = weekly * 52;
    const copyText = `Hourly: $${fmt(hourly)}, Annual: $${fmtInt(annual)}`;
    return <CalcShell title="Salary Calculator" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<Field label="Hourly Rate" prefix="$" value={vals.hourly || ''} onChange={set('hourly')} placeholder="25" />}
      results={<><ResultRow label="Hourly" value={`$${fmt(hourly)}`} /><ResultRow label="Weekly (40h)" value={`$${fmt(weekly)}`} /><ResultRow label="Monthly" value={`$${fmt(monthly)}`} /><ResultRow label="Annual" value={`$${fmtInt(annual)}`} highlight /></>} />;
  }

  // Emergency Fund Calculator
  if (slug === 'emergency-fund') {
    const monthly = n('monthly'), months = n('months', 6);
    const target = monthly * months;
    const current = n('current');
    const remaining = Math.max(0, target - current);
    const copyText = `Target: $${fmt(target)}, Remaining: $${fmt(remaining)}`;
    return <CalcShell title="Emergency Fund Calculator" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Monthly Expenses" prefix="$" value={vals.monthly || ''} onChange={set('monthly')} placeholder="3000" /><Field label="Months of Coverage" value={vals.months || '6'} onChange={set('months')} placeholder="6" /><Field label="Current Savings" prefix="$" value={vals.current || ''} onChange={set('current')} placeholder="5000" /></>}
      results={<><ResultRow label="Target Fund" value={`$${fmt(target)}`} highlight /><ResultRow label="Current Savings" value={`$${fmt(current)}`} /><ResultRow label="Still Needed" value={`$${fmt(remaining)}`} /></>} />;
  }

  // Goal Savings Calculator
  if (slug === 'goal-savings') {
    const goal = n('goal'), current = n('current'), rate = n('rate', 5), months = n('months');
    const r = rate / 100 / 12;
    const needed = goal - current;
    const monthlyNeeded = months > 0 && r > 0 ? needed * r / (Math.pow(1 + r, months) - 1) : months > 0 ? needed / months : 0;
    const copyText = `Monthly savings needed: $${fmt(monthlyNeeded)}`;
    return <CalcShell title="Goal Savings Calculator" onReset={reset} onCopy={() => onCopy(copyText)} copied={copied}
      children={<><Field label="Savings Goal" prefix="$" value={vals.goal || ''} onChange={set('goal')} placeholder="20000" /><Field label="Current Savings" prefix="$" value={vals.current || ''} onChange={set('current')} placeholder="5000" /><Field label="Expected Annual Return" suffix="%" value={vals.rate || '5'} onChange={set('rate')} /><Field label="Time to Goal" suffix="months" value={vals.months || ''} onChange={set('months')} placeholder="24" /></>}
      results={<><ResultRow label="Amount Still Needed" value={`$${fmt(Math.max(0, needed))}`} /><ResultRow label="Monthly Savings Needed" value={`$${fmt(monthlyNeeded)}`} highlight /></>} />;
  }

  return <div className="card p-6 text-center text-ink-400">Calculator coming soon.</div>;
}
