import { client } from '../libs/client';
import { IBlog, MicroCmsResponse, Queries } from '../types/interface';

const defaultLimit = '10';
const defaultMaxLimit = '200';

const limit = parseInt(defaultLimit);
const limitdefaultMaxLimit = parseInt(defaultMaxLimit);

export const getContents = async (
  currentPage: number = 1,
): Promise<{
  blogs: IBlog[];
  pager: number[];
}> => {
  const [{ blogs, pager }] = await Promise.all([getBlogsByFilter(limit, currentPage)]);
  return {
    blogs: blogs.contents,
    pager,
  };
};

export const getAllBlogs = async (): Promise<MicroCmsResponse<IBlog>> => {
  const res = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: 'news',
    queries: { limit: limitdefaultMaxLimit },
  });
  return res;
};

export const getBlogs = async (limit: number): Promise<MicroCmsResponse<IBlog>> => {
  const res = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: 'news',
    queries: { limit: limit },
  });

  return res;
};

export const getLatestBlogs = async (limit: number): Promise<MicroCmsResponse<IBlog>> => {
  const res = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: 'news',
    queries: { limit: limit },
  });

  return res;
};

export const getBlogsByFilter = async (
  limit: number,
  currentPage: number,
): Promise<{ blogs: MicroCmsResponse<IBlog>; pager: number[] }> => {
  const queries: Queries = {
    limit: limit,
    offset: (currentPage - 1) * limit,
  };
  const blogs = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: 'news',
    queries: queries,
  });
  const pager = [...Array(Math.ceil(blogs.totalCount / 10)).keys()];
  return { blogs, pager };
};

export const getBlogById = async (blogId: string): Promise<IBlog> => {
  const res = await client.get<IBlog>({
    endpoint: 'news',
    contentId: blogId,
    queries: { depth: 2 },
  });
  return res;
};
