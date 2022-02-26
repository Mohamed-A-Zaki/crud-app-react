import React, { createRef, memo, useEffect } from "react";

const Form = ({
  course_name,
  handle_change,
  handle_add,
  is_edit,
  handle_edit_in_form,
}) => {
  let inp_ref = createRef();

  // to auto focus after each update
  useEffect(() => {
    inp_ref.current.focus();
  });

  let edit_btn = <button onClick={handle_edit_in_form}>Edit Course</button>;
  let add_btn = <button onClick={handle_add}>Add Course</button>;
  return (
    <form>
      <input
        type="text"
        ref={inp_ref}
        value={course_name}
        onChange={handle_change}
      />
      {is_edit ? edit_btn : add_btn}
    </form>
  );
};

export default memo(Form);
