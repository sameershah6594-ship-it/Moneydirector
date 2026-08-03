import type { Author } from './types';

export const authors: Author[] = [
  {
    id: 'sarah-chen', name: 'Sarah Chen', role: 'Editorial Director',
    bio: 'Sarah leads the editorial team, overseeing content quality and editorial standards across all finance topics.',
    longBio: 'Sarah Chen is the Editorial Director at Money Director, where she oversees content strategy and editorial standards. With over a decade of experience writing about personal finance, Sarah has covered topics ranging from budgeting fundamentals to advanced investment strategies. She believes that clear, honest financial information should be accessible to everyone. Sarah manages the editorial review process, ensuring every article meets the site standards for accuracy, clarity, and usefulness before publication. Her approach is grounded in the belief that good financial habits, built steadily over time, matter far more than chasing trends.',
    photo: 'https://images.pexels.com/photos/27086922/pexels-photo-27086922.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    social: { twitter: 'sarahchen', linkedin: 'sarah-chen', email: 'sarah@moneydirector.com' },
    expertise: ['Editorial Standards', 'Personal Finance', 'Financial Planning', 'Budgeting'],
  },
  {
    id: 'marcus-reid', name: 'Marcus Reid', role: 'Finance Writer',
    bio: 'Marcus writes about banking, loans, and credit, helping readers understand borrowing and managing money.',
    longBio: 'Marcus Reid is a Finance Writer at Money Director specializing in banking, loans, and credit topics. He grew up watching his parents struggle with debt, which sparked a lifelong interest in helping people understand borrowing and avoid common traps. Marcus has spent years researching personal loans, auto financing, and credit-building strategies. He focuses on practical, step-by-step guidance that readers can apply immediately, and is passionate about demystifying financial jargon.',
    photo: 'https://images.pexels.com/photos/14391923/pexels-photo-14391923.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    social: { twitter: 'marcusreid', linkedin: 'marcus-reid', email: 'marcus@moneydirector.com' },
    expertise: ['Banking', 'Loans', 'Credit Cards', 'Debt Management'],
  },
  {
    id: 'david-okafor', name: 'David Okafor', role: 'Investment Writer',
    bio: 'David covers investing, retirement planning, and passive income, with a focus on long-term wealth building.',
    longBio: 'David Okafor is an Investment Writer at Money Director who focuses on investing, retirement planning, and building passive income streams. David began investing in his early twenties and learned through both successes and mistakes the importance of a disciplined, long-term approach. He writes about stocks, bonds, ETFs, retirement accounts, and portfolio strategy in plain language, avoiding hype and speculation. He emphasizes diversification, consistency, and understanding risk tolerance as the foundations of successful investing.',
    photo: 'https://images.pexels.com/photos/30124371/pexels-photo-30124371.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    social: { twitter: 'davidokafor', linkedin: 'david-okafor', email: 'david@moneydirector.com' },
    expertise: ['Investing', 'Retirement', 'Passive Income', 'Portfolio Strategy'],
  },
  {
    id: 'emily-watson', name: 'Emily Watson', role: 'Budget Specialist',
    bio: 'Emily specializes in budgeting, saving strategies, and helping readers build sustainable money habits.',
    longBio: 'Emily Watson is a Budget Specialist at Money Director, dedicated to helping people take control of their spending and build sustainable saving habits. Emily has explored dozens of budgeting methods, from envelope systems to zero-based budgeting, and helps readers find the approach that fits their lifestyle. She writes about saving goals, emergency funds, and practical ways to cut costs without feeling deprived. Emily believes that budgeting is about intentionality, and that a good budget should reflect your values and priorities.',
    photo: 'https://images.pexels.com/photos/29086752/pexels-photo-29086752.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    social: { twitter: 'emilywatson', linkedin: 'emily-watson', email: 'emily@moneydirector.com' },
    expertise: ['Budgeting', 'Saving', 'Personal Finance', 'Money Management'],
  },
  {
    id: 'james-patel', name: 'James Patel', role: 'Insurance Writer',
    bio: 'James covers insurance, taxes, and financial planning, helping readers protect assets and plan ahead.',
    longBio: 'James Patel is an Insurance Writer at Money Director covering insurance, taxes, and broader financial planning topics. James developed an interest in insurance after seeing how inadequate coverage affected a family member, and has since dedicated himself to helping readers understand insurance policies. He writes about life, health, auto, and home insurance, as well as tax basics and estate planning. James focuses on helping readers assess their actual coverage needs rather than buying policies they do not understand.',
    photo: 'https://images.pexels.com/photos/9092311/pexels-photo-9092311.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    social: { twitter: 'jamespatel', linkedin: 'james-patel', email: 'james@moneydirector.com' },
    expertise: ['Insurance', 'Taxes', 'Financial Planning', 'Estate Planning'],
  },
];

export const getAuthorById = (id: string) => authors.find((a) => a.id === id);
