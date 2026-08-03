export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  photo: string;
  social: { twitter?: string; linkedin?: string; email?: string };
  expertise: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  image: string;
}

export interface ArticleSection {
  heading: string;
  body: string[];
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
  authorId: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: number;
  categoryId: string;
  tags: string[];
  tableOfContents: { id: string; title: string }[];
  content: ArticleSection[];
  faqs: ArticleFAQ[];
  featured: boolean;
  trending: boolean;
  editorsPick: boolean;
  popular: boolean;
}

export interface CalculatorMeta {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  icon: string;
}
