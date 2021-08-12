import React from 'react';

import PageWrapper from '../../components/PageWrapper';
import PlayerCustomized from "../../components/PlayerCustomized";
import HomepageMeta from "../../components/HomepageMeta";



const Demo = () => (
  <PageWrapper>
    <HomepageMeta canonicalAddress={'/demo'}/>
    <PlayerCustomized/>
  </PageWrapper>
);


Demo.displayName = 'Demo';

export default Demo;
