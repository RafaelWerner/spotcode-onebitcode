import React, { Fragment, useState } from 'react';
import { FaRegHearth, FaHearth } from "react-icons/fa";
import FavoritesService from "../../../services/favorites";

const Favorite = (props) => {
  const [favored, setFavored] = useState(props.favored);

  let FavoredButton;
  if(favored)
    FavoredButton = <FaHearth size='25px' className='has-text-white' onClick={() => disfavor()}/>
  else
    FavoredButton = <FaRegHearth size='25px' className='has-text-white' onClick={() => favor()}/>

  async function disfavor() {
    await FavoritesService.delete(props.kind, props.id);
    setFavored(false);
  }

  async function favor() {
    await FavoritesService.create(props.kind, props.id);
    setFavored(true);
  }

  return (
    <Fragment>
      { FavoredButton }
    </Fragment>
  );
}

export default Favorite;
