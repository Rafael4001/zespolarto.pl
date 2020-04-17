import React from 'react';
import Head from 'next/head';

const HomepageMeta = () => {
  return (
    <Head>
      <title>Arto | zespół muzyczny</title>
      <meta
        name="description"
        content="zespolarto.pl zespół muzyczny, muzyka rozrywkowa na każdą okazję."
      />
      <meta name="robots" content="index, follow"/>
      <meta property="og:title" content="Zespół Arto to doskonały zespół i muzyka na twoje wesele"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="http://zespolarto.pl"/>
      {/*<meta property="og:image" content={OG_META_TAG_IMAGE} />*/}
      {/*<meta property="og:image:type" content={getContentType(OG_META_TAG_IMAGE)} />*/}
      {/*<meta property="og:image:height" content="1200" />*/}
      {/*<meta property="og:image:width" content="630" />*/}
      <meta
        property="og:description"
        content="
        zespolarto.pl to zespół muzyczny, wykonujący muzykę rozrywkową na żywo,
        idealny wybór na oprawę muzyczną przyjęcia weselnego, bankietu lub imprezy firmowej.
        Doskonała zabawa do białego rana."
      />
      <meta property="og:site_name" content="Arto"/>

      <link rel="canonical" href="http://www.zespolarto.pl"/>
    </Head>
  );
};

HomepageMeta.propTypes = {};

HomepageMeta.displayName = 'HomepageMeta';

export default HomepageMeta;
