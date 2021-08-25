import { client } from '../../libs/client';
import Content from '../components/content';

interface Article {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  blankLink: string;
  body: string;
}
interface Contents {
  contents: Article[];
}

export default function BlogId({ news }) {
  return (
    <Content>
      <main>
        <h1>{news.title}</h1>
        <p>{news.publishedAt}</p>
        <p>{news.category.name}</p>
        {news.blankLink && <p>{news.blankLink}</p>}
        <div
          dangerouslySetInnerHTML={{
            __html: `${news.body}`,
          }}
        />
      </main>
    </Content>
  );
}

export const getStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: 'news' });

  const paths = data.contents.map((content) => `/news/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'news', contentId: id });

  return {
    props: {
      news: data,
    },
  };
};
