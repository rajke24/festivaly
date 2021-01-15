import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";

import CalendarList from "../../components/festivals/CalendarList";
import { closeSubmenu } from "../../actions/home";
import { loadYearFestivals } from "../../actions/festivals";

const filterInitialState = [
  { name: "CHOOSE COUNTRY", isActive: true },
  { name: "Poland", isActive: false },
  { name: "USA", isActive: false },
  { name: "France", isActive: false },
  { name: "Germany", isActive: false },
  { name: "Belgium", isActive: false },
];

const Calendar = () => {
  const [date, setDate] = useState(new Date().getFullYear());
  const [filterValues, setFilterValues] = useState(filterInitialState);
  const [selectedCountry, setSelectedCountry] = useState("CHOOSE COUNTRY");
  const dispatch = useDispatch();
  const isSubmenuOpen = useSelector((state) => state.home.isSubmenuOpen);

  const handleCloseSubmenu = () => {
    if (isSubmenuOpen) {
      dispatch(closeSubmenu());
    }
  };

  const handlePrevBtn = () => {
    setDate(date - 1);
  };

  const handleNextBtn = () => {
    setDate(date + 1);
  };

  useEffect(() => {
    dispatch(loadYearFestivals(date));
    setFilterValues(filterInitialState);
    setSelectedCountry("CHOOSE COUNTRY");
  }, [date]);

  const setActiveBtn = (index) => {
    const temp = filterValues.map((btn) => {
      return { name: btn.name, isActive: false };
    });
    temp[index].isActive = true;
    setFilterValues(temp);
  };

  const handleFilterBtn = (index) => {
    setActiveBtn(index);

    const country = index !== 0 ? filterValues[index].name : "";
    setSelectedCountry(country);
    dispatch(loadYearFestivals(date, country));
  };

  const handleSelectChange = (e) => {
    let country = e.target.value;
    const index = filterValues.findIndex((item) => item.name === country);
    country = country !== "CHOOSE COUNTRY" ? country : "";

    setActiveBtn(index);
    setSelectedCountry(country);
    dispatch(loadYearFestivals(date, country));
  };

  return (
    <div onMouseOver={handleCloseSubmenu}>
      <section className="calendar-panel">
        <button className="calendar-btn" onClick={handlePrevBtn}>
          prev
        </button>
        <div className="calendar-date">{date}</div>
        <button className="calendar-btn" onClick={handleNextBtn}>
          next
        </button>
      </section>
      <section className="calendar-filter">
        <ul className="desktop">
          {filterValues.map((button, index) => {
            return (
              <li key={index}>
                <button
                  className={`filter-btn ${button.isActive && "active"}`}
                  onClick={() => handleFilterBtn(index)}
                >
                  {button.name}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mobile">
          <label htmlFor="" className="mobile-select">
            <select
              value={selectedCountry}
              onChange={handleSelectChange}
              className="native-select"
            >
              {filterValues.map((value) => {
                return <option value={value.name}>{value.name}</option>;
              })}
            </select>
            <div className="select-btn">
              {selectedCountry || "CHOOSE COUNTRY"}
              <IoIosArrowDown className="arrow-down" />
            </div>
          </label>
        </div>
      </section>
      <CalendarList />
    </div>
  );
};

export default Calendar;
