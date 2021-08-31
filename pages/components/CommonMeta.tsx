import Head from 'next/head';

export default function CommonMeta({
  title = 'Eight Knot inc.',
  description = '株式会社エイトノットは、あらゆる水上モビリティをロボティクスとAIで自律化することを目指し活動している企業です。',
}) {
  return (
    <Head>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
      <meta property='description' content={description} />
      <meta property='og:locale' content='ja_JP' />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content={description} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content='https://8kt.jp/' />
      <meta property='og:image' content='/og_image.png' />
      <meta property='og:image:width' content='512' />
      <meta property='og:image:height' content='512' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@8ktjp' />
      <meta name='twitter:domain' content='8kt.jp' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:image' content='/og_image.png' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.svg' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon-180x180.png' />
      <meta name='msapplication-square70x70logo' content='/site-tile-70x70.png' />
      <meta name='msapplication-square150x150logo' content='/site-tile-150x150.png' />
      <meta name='msapplication-wide310x150logo' content='/site-tile-310x150.png' />
      <meta name='msapplication-square310x310logo' content='/site-tile-310x310.png' />
      <meta name='msapplication-TileColor' content='#00629B' />
    </Head>
  );
}
