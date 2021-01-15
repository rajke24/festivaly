import React from 'react'
import {useSelector} from "react-redux";
import CalendarItem from "./CalendarItem";

const CalendarList = () => {
    const festivals = useSelector((state) => state.festivals.festivalsFromYear)

    if (festivals.length === 0) {
        return <section className="section-center" style={{marginTop: "4rem"}}>
            <h2>No festivals found</h2>
        </section>
    }

    return (
      <div className="calendar-list-wrapper">
        <ul className="calendar-list">
            {festivals.map((festival) => {
                return <CalendarItem key={festival.id} {...festival} />
            })}
        </ul>
      </div>
    );
}

export default CalendarList
