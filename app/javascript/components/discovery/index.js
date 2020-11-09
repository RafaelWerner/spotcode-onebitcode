import React, { Fragment } from 'react';
import Album from '../album';
import styled from 'styled-components';
import { Columns, Heading } from 'react-bulma-components';

const DivVSpaced = styled.div`
  margin-top: 50px;
`

const Discovery = () => {
  const albums_mock = [
    {
      "id": 11,
      "title": "Trinity",
      "artits_name": "Cullah",
      "cover_url": "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBPdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2e3df06e32e3d8d9679c831dfffdbfab60ebc764/trinity.jpg"
    },
    {
        "id": 12,
        "title": "Paw Paw Tree",
        "artits_name": "Handmade Moments",
        "cover_url": "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBQdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bdf49a7e0b6b2c2487433c7c6eed37a7be3cc642/paw_paw_tree.jpg"
    },
    {
        "id": 6,
        "title": "Everything Zen",
        "artits_name": "Yellow Chair",
        "cover_url": "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBLUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f3f2e484d4d05382ea29e6fc8bb276bb0ba91358/everything_zen.jpg"
    },
    {
        "id": 3,
        "title": "Gubernator",
        "artits_name": "Andrew Howes",
        "cover_url": "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3a88cbc04bcd628e4c212e22b267ab5c46e74de0/gubernator.jpg"
    }
  ]

  const albums = albums_mock.map((album, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album artits_name={album.artits_name} title={album.title} cover_url={album.cover_url} id={album.id} />
    </Columns.Column>
  );

  return(
    <Fragment>
      <div>
        <Heading className='has-text-white' size={4}>
          Tocadas recentemente
        </Heading>
        <Columns className='is-mobile'>
          {albums}
        </Columns>
      </div>
      <DivVSpaced>
        <Heading className='has-text-white' size={4}>
          Recomendadas
        </Heading>
        <Columns className='is-mobile'>
          {albums}
        </Columns>
      </DivVSpaced>
    </Fragment>
  );
}

export default Discovery;
