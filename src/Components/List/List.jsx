import React, { memo } from "react";

const List = ({ course_list, handle_delete, handle_edit_in_list }) => {
  // if no courses render empty div
  let empty = <div className="empty">There is no couses</div>;

  // if courses exist render courses list
  let courses = (
    <div className="list">
      {/* start map course list */}
      {course_list.map(({ id, name }) => {
        return (
          // start course item
          <div className="course" key={id}>
            {/* course name */}
            <span className="name">{name}</span>

            {/* edit button */}
            <button className="edit" onClick={() => handle_edit_in_list(id)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>

            {/* delete button */}
            <button className="delete" onClick={() => handle_delete(id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
          // end course item
        );
      })}
      {/* end map course list */}
    </div>
  );

  return <div className="courses">{course_list.length ? courses : empty}</div>;
};

export default memo(List);
