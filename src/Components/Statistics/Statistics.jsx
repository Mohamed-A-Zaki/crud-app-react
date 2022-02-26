import React from "react";

const Statistics = ({ number_of_courses }) => {
  return (
    <div className="stat">
      <div className="number">
        Num. Of Courses : <span>{number_of_courses}</span>
      </div>
    </div>
  );
};

export default Statistics;
