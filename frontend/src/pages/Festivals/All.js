import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import FestivalsList from '../../components/festivals/FestivalsList'
import SearchBar from '../../components/festivals/SearchBar'
import { closeSubmenu } from "../../actions/home";

const AllFestivals = () => {
    const isSubmenuOpen = useSelector((state) => state.home.isSubmenuOpen);
    const dispatch = useDispatch();

    const handleCloseSubmenu = () => {
      if (isSubmenuOpen) {
        dispatch(closeSubmenu());
      }
    };

    return (
      <div className="wrapper-dark" onMouseOver={handleCloseSubmenu}>
        <SearchBar />
        <FestivalsList />
      </div>
    );
}

export default AllFestivals
