import React from "react";

const Day = ({ date }) => {
  // Function to get the day of the week from the date
  const getDayOfWeek = (date) => {
    const customDayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return customDayNames[date.getDay()];
  };

  return <span>{getDayOfWeek(date)}</span>;
};

export default Day;
