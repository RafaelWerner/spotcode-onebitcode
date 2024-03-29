import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container, Columns } from 'react-bulma-components';
import { FaSearch, FaHome, FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const NavBarWithBorder = styled(Navbar)`
  border-top-color: white !important;
  border-top-style: solid;
  border-top-width: 1px;
`

const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 10px;
`

const NavbarFooter = () => {
  return(
    <Fragment>
      <NavBarWithBorder fixed='bottom' color='dark'>
        <Container>
          <ColumnsFullWidth className='is-mobile is-vcentered'>
            <Columns.Column className='has-text-centered'>
              <Link to='/discovery' className='has-text-white'>
                <FaHome size='25px'/>
              </Link>
            </Columns.Column>
            <Columns.Column className='has-text-centered'>
              <Link to='/search' className='has-text-white'>
                <FaSearch size='25px'/>
              </Link>
            </Columns.Column>
            <Columns.Column className='has-text-centered'>
              <Link to='/favorites' className='has-text-white'>
                <FaHeart size='25px'/>
              </Link>
            </Columns.Column>
          </ColumnsFullWidth>
        </Container>
      </NavBarWithBorder>
    </Fragment>
  );
}

export default NavbarFooter;
