import React from 'react';
import Head from 'next/head';

import PropTypes from 'prop-types';

const Index = ({canonicalAddress}) => (
  <Head>
    <title>Arto | zespół muzyczny | oprawa muzyczna na wesele</title>
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
        idealny wybór na oprawę muzyczną na wesele, bankiet lub imprezę firmową.
        Doskonała zabawa do białego rana.
        "
    />
    <meta property="og:site_name" content="Arto"/>

    <link rel="canonical" href={`http://www.zespolarto.pl${canonicalAddress}`}/>
  </Head>
);

Index.propTypes = {
  canonicalAddress: PropTypes.string.isRequired,
};

Index.displayName = 'Index';

export default Index;
