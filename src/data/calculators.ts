import type { CalculatorMeta } from './types';

export const calculators: CalculatorMeta[] = [
  { id: 'emi', name: 'EMI Calculator', slug: 'emi', description: 'Calculate monthly loan EMI payments', category: 'Loans', icon: 'Calculator' },
  { id: 'loan', name: 'Loan Calculator', slug: 'loan', description: 'Estimate loan payments and total interest', category: 'Loans', icon: 'HandCoins' },
  { id: 'mortgage', name: 'Mortgage Calculator', slug: 'mortgage', description: 'Calculate mortgage payments and amortization', category: 'Mortgage', icon: 'Home' },
  { id: 'savings', name: 'Savings Calculator', slug: 'savings', description: 'Project savings growth over time', category: 'Saving', icon: 'PiggyBank' },
  { id: 'compound-interest', name: 'Compound Interest Calculator', slug: 'compound-interest', description: 'See how compound interest grows wealth', category: 'Investing', icon: 'TrendingUp' },
  { id: 'investment', name: 'Investment Calculator', slug: 'investment', description: 'Estimate investment returns over time', category: 'Investing', icon: 'TrendingUp' },
  { id: 'sip', name: 'SIP Calculator', slug: 'sip', description: 'Calculate systematic investment plan returns', category: 'Investing', icon: 'TrendingUp' },
  { id: 'budget-planner', name: 'Budget Planner', slug: 'budget-planner', description: 'Plan your budget with the 50/30/20 rule', category: 'Budgeting', icon: 'Calculator' },
  { id: 'retirement', name: 'Retirement Calculator', slug: 'retirement', description: 'Estimate how much you need to retire', category: 'Retirement', icon: 'Coffee' },
  { id: 'debt-payoff', name: 'Debt Payoff Calculator', slug: 'debt-payoff', description: 'Plan your debt payoff strategy', category: 'Debt', icon: 'TrendingDown' },
  { id: 'credit-card-interest', name: 'Credit Card Interest Calculator', slug: 'credit-card-interest', description: 'Calculate credit card payoff time and interest', category: 'Credit Cards', icon: 'CreditCard' },
  { id: 'inflation', name: 'Inflation Calculator', slug: 'inflation', description: 'See how inflation affects your money value', category: 'Personal Finance', icon: 'Percent' },
  { id: 'net-worth', name: 'Net Worth Calculator', slug: 'net-worth', description: 'Calculate your total net worth', category: 'Financial Planning', icon: 'Wallet' },
  { id: 'roi', name: 'ROI Calculator', slug: 'roi', description: 'Calculate return on investment', category: 'Investing', icon: 'Percent' },
  { id: 'tax', name: 'Tax Calculator', slug: 'tax', description: 'Estimate your income tax liability', category: 'Taxes', icon: 'Receipt' },
  { id: 'currency-converter', name: 'Currency Converter', slug: 'currency-converter', description: 'Convert between major currencies', category: 'Personal Finance', icon: 'DollarSign' },
  { id: 'percentage', name: 'Percentage Calculator', slug: 'percentage', description: 'Quick percentage calculations', category: 'Personal Finance', icon: 'Percent' },
  { id: 'salary', name: 'Salary Calculator', slug: 'salary', description: 'Convert between salary frequencies', category: 'Personal Finance', icon: 'DollarSign' },
  { id: 'emergency-fund', name: 'Emergency Fund Calculator', slug: 'emergency-fund', description: 'Calculate your emergency fund target', category: 'Saving', icon: 'ShieldCheck' },
  { id: 'goal-savings', name: 'Goal Savings Calculator', slug: 'goal-savings', description: 'Plan savings to reach a financial goal', category: 'Saving', icon: 'Target' },
];

export const getCalculatorBySlug = (slug: string) => calculators.find((c) => c.slug === slug);
