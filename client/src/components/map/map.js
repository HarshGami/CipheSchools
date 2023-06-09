import React from "react";
import "./map.css";

const Map = () => {
  const year = [
    [
      [0, 3, 0, 1, 0],
      [1, 0, 1, 0, 2],
      [2, 2, 0, 2, 0],
      [0, 1, 3, 0, 3],
      [3, 0, 0, 3, 0],
      [0, 2, 1, 0, 2],
      [2, 3, 0, 1, 0],
    ],
    [
      [0, 0, 0, 0, 2],
      [0, 2, 1, 0, 0],
      [2, 0, 3, 0, 2],
      [0, 1, 3, 0, 0],
      [2, 0, 1, 0, 2],
      [0, 3, 0, 3, 0],
      [2, 0, 1, 0, 2],
    ],
    [
      [0, 3, 0, 1, 0],
      [1, 0, 1, 0, 2],
      [2, 2, 0, 2, 0],
      [0, 1, 3, 0, 3],
      [3, 0, 0, 3, 0],
      [0, 2, 1, 0, 2],
      [2, 3, 0, 1, 0],
    ],
    [
      [0, 2, 0, 0, 2],
      [1, 2, 0, 3, 0],
      [2, 0, 1, 0, 2],
      [0, 0, 0, 3, 0],
      [2, 0, 1, 0, 2],
      [0, 0, 0, 3, 0],
      [2, 0, 1, 1, 2],
    ],
    [
      [0, 0, 0, 0, 2],
      [0, 2, 1, 0, 0],
      [2, 0, 3, 0, 2],
      [0, 1, 3, 0, 0],
      [2, 0, 1, 0, 2],
      [0, 3, 0, 3, 0],
      [2, 0, 1, 0, 2],
    ],
    [
      [0, 3, 0, 1, 0],
      [1, 0, 1, 0, 2],
      [2, 2, 0, 2, 0],
      [0, 1, 3, 0, 3],
      [3, 0, 0, 3, 0],
      [0, 2, 1, 0, 2],
      [2, 3, 0, 1, 0],
    ],
    [
      [0, 2, 0, 0, 2],
      [1, 2, 0, 3, 0],
      [2, 0, 1, 0, 2],
      [0, 0, 0, 3, 0],
      [2, 0, 1, 0, 2],
      [0, 0, 0, 3, 0],
      [2, 0, 1, 1, 2],
    ],
    [
      [0, 0, 0, 0, 2],
      [0, 2, 1, 0, 0],
      [2, 0, 3, 0, 2],
      [0, 1, 3, 0, 0],
      [2, 0, 1, 0, 2],
      [0, 3, 0, 3, 0],
      [2, 0, 1, 0, 2],
    ],
    [
      [0, 2, 0, 0, 2],
      [1, 2, 1, 1, 0],
      [2, 1, 1, 1, 2],
      [2, 1, 1, 1, 2],
      [2, 1, 1, 1, 2],
      [2, 1, 1, 1, 2],
      [2, 1, 1, 1, 2],
    ],
    [
      [0, 2, 0, 0, 2],
      [1, 2, 0, 3, 0],
      [2, 0, 1, 0, 2],
      [0, 0, 0, 3, 0],
      [2, 0, 1, 0, 2],
      [0, 0, 0, 3, 0],
      [2, 0, 1, 1, 2],
    ],
    [
      [0, 0, 0, 0, 2],
      [0, 2, 1, 0, 0],
      [2, 0, 3, 0, 2],
      [0, 1, 3, 0, 0],
      [2, 0, 1, 0, 2],
      [0, 3, 0, 3, 0],
      [2, 0, 1, 0, 2],
    ],
    [
      [0, 2, 0, 0, 2],
      [1, 2, 1, 0, 0],
      [2, 1, 1, 0, 2],
      [2, 1, 1, 1, 2],
      [2, 1, 1, 2, 2],
      [2, 1, 1, 3, 2],
      [2, 1, 1, 0, 3],
    ],
  ];

  const m = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const st = 4;
  const mons = [];

  for (let i = 0; i < 12; i++) {
    mons.push(m[(st + i) % 12]);
  }

  const yearMap = year.map((month, i) => {
    return (
      <div className="month-grid">
        <div className="month-text">{mons[i]}</div>
        {month.map((week) => {
          return (
            <div className="week-grid">
              {week.map((day) => {
                return <div className={"day + day" + day}></div>;
              })}
            </div>
          );
        })}
      </div>
    );
  });
  return (
    <div className="map-container">
      <div className="header_container">
        <div className="left-header">CIPHER MAP</div>
      </div>
      <div className="map-grid">
        <div className="weeks">
          <div className="w"></div>
          <div className="w"></div>
          <div className="w">Mon</div>
          <div className="w"></div>
          <div className="w">Wed</div>
          <div className="w"></div>
          <div className="w">Fri</div>
          <div className="w"></div>
        </div>
        <div className="year">{yearMap}</div>
      </div>
    </div>
  );
};

export default Map;
