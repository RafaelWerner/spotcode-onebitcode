import React, { Fragment } from 'react';
import SectionWrapper from '../../components/common/section_wrapper';
import Disccovery from '../../components/discovery';
import NavbarFooter from '../../components/common/navbar_footer';

const DiscoverScreen = () => {
  return(
    <Fragment>
      <SectionWrapper>
        <Disccovery />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  );
}

export default DiscoverScreen;
