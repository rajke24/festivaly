import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { loadFestival } from "../../actions/festivals";

const CalendarItem = ({id, name, img_url, start_date}) => {
    const dispatch = useDispatch();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const weekday = new Date(start_date).getDay();
    const curDay = weekdays[weekday];

    return (
      <li className="box-outer calendar-item">
        <Link
          to={`/festivals/festival/${id}`}
          className="box-inner"
          onClick={() => dispatch(loadFestival(id))}
        >
          <div className="title">{name}</div>
          <div className="img-wrapper">
            <img src={img_url} alt="" className="calendar-item-image" />
          </div>
          <footer className="footer">
            <div className="calendar-info">{curDay} {start_date.split("-").join("/")}</div>
            <div className="go-to-arrow">
              <span>go to festival</span>
              <CgArrowLongRight className="arrow-icon" />
            </div>
          </footer>
        </Link>
      </li>
    );
}

export default CalendarItem
