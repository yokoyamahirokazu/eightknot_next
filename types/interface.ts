import {
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSObjectContent,
  MicroCMSQueries,
} from 'microcms-js-sdk';

export type Queries = MicroCMSQueries;

export type TocTypes = {
  text: string;
  id: string;
  name: string;
};

export interface IBlog extends ContentBase {
  id: string;
  title?: string;
  category?: {
    name?: string;
  };
  publishedAt: string;
  blankLink?: string;
  thumb?: string;
  pubDate?: string;
}

export interface ICategory extends ContentBase {
  name?: string;
}

export interface IAuthor extends ContentBase {
  name?: string;
  text?: string;
}

export interface IBanner extends MicroCMSObjectContent {
  image?: IMicroCmsImageType;
  url?: string;
  alt?: string;
}

export interface ITag extends ContentBase {
  name?: string;
}

export interface IPopularArticles extends MicroCMSObjectContent {
  articles: IBlog[];
}

export type MicroCmsResponse<T> = MicroCMSListResponse<T>;

export type ContentBase = MicroCMSListContent;

export interface IMicroCmsImageType {
  url: string;
  height: number;
  width: number;
}

export interface IDraftResponse {
  blog: IBlog;
  toc: TocTypes[];
  body: string;
}

export type Response<T = any> = {
  data: T;
  headers: any;
};

export interface IHttpClient {
  get: <T extends object, R = Response<T>>(path: string) => Promise<R>;
}
