import React, { memo } from "react";

const List = ({ course_list, handle_delete, handle_edit_in_list }) => {
  let empty = <div className="empty">There is no couses</div>;

  let courses = (
    <div className="list">
      {course_list.map(({ id, name }) => {
        return (
          <div className="course" key={id}>
            <span className="name">{name}</span>
            <button className="edit" onClick={() => handle_edit_in_list(id)}>
              Edit
            </button>
            <button className="delete" onClick={() => handle_delete(id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );

  return <div className="courses">{course_list.length ? courses : empty}</div>;
};

export default memo(List);
