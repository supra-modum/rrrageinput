import React from 'react';
import 'cirrus-ui';

import {
  Wrapper,
  SmallHeading,
  Footer,
  Header,
  HeroCV,
  H6Animated,
  List,
  Article,
  MarkComponent,
} from '../exports';
import { Contacts } from '~/contacts';

export const CV: React.FC = () => {
  return (
    <>
      <Header />
      <HeroCV />
      <Wrapper>
        <div>t</div>
      </Wrapper>
      <Contacts />
      <Footer />
    </>
  );
};
