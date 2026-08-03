import type { Article } from './types';
import { articlesGroup1 } from './articles-1';
import { articlesGroup2 } from './articles-2';
import { articlesGroup3 } from './articles-3';
import { articlesGroup4 } from './articles-4';
import { articlesGroup5 } from './articles-5';
import { articlesGroup6 } from './articles-6';
import { articlesGroup7 } from './articles-7';
import { articlesGroup8 } from './articles-8';
import { articlesGroup9 } from './articles-9';
import { articlesGroup10 } from './articles-10';

export const allArticles: Article[] = [
  ...articlesGroup1,
  ...articlesGroup2,
  ...articlesGroup3,
  ...articlesGroup4,
  ...articlesGroup5,
  ...articlesGroup6,
  ...articlesGroup7,
  ...articlesGroup8,
  ...articlesGroup9,
  ...articlesGroup10,
];

export const getArticleBySlug = (slug: string) => allArticles.find((a) => a.slug === slug);
export const getArticlesByCategory = (categoryId: string) => allArticles.filter((a) => a.categoryId === categoryId);
export const getArticlesByAuthor = (authorId: string) => allArticles.filter((a) => a.authorId === authorId);
export const getFeaturedArticles = () => allArticles.filter((a) => a.featured);
export const getTrendingArticles = () => allArticles.filter((a) => a.trending);
export const getEditorsPicks = () => allArticles.filter((a) => a.editorsPick);
export const getPopularArticles = () => allArticles.filter((a) => a.popular);
export const getLatestArticles = (limit = 6) =>
  [...allArticles].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate)).slice(0, limit);
export const getRelatedArticles = (article: Article, limit = 3) =>
  allArticles
    .filter((a) => a.id !== article.id && a.categoryId === article.categoryId)
    .slice(0, limit);

export { type Article } from './types';
