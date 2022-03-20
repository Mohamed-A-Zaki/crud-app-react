import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./App.scss";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Statistics from "./Components/Statistics/Statistics";

function App() {
  const [course_name, setCourse_name] = useState("");
  const [course_list, setCourse_list] = useState([]);
  const [is_edit, setIs_edit] = useState(false);
  const [c_name_before_update, setC_name_before_update] = useState("");

  useEffect(() => {
    if (localStorage.getItem("courses")) {
      setCourse_list(JSON.parse(localStorage.getItem("courses")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(course_list));
  }, [course_list]);

  function handle_change(e) {
    // get value from input field
    setCourse_name(e.target.value);
  }

  function add_new_course() {
    // create new course object
    let new_course = { id: course_list.length + 1, name: course_name };
    // update state by adding new course
    setCourse_list([...course_list, new_course]);
    // empty the input field
    setCourse_name("");
    // show toast when couese added
    toast.success("Course Added successfully !");
  }

  function handle_add(e) {
    e.preventDefault();
    if (course_name) {
      // check if new value is olready exist or not
      course_list.find((value) => value.name === course_name)
        ? toast.error("Repeated Value !")
        : add_new_course();
    } else {
      // show error message when empty value
      toast.error("Empty Value !");
    }
  }

  function handle_delete(id) {
    // get undeleted courses
    let new_course_list = course_list.filter((value) => {
      return value.id !== id;
    });
    // update state
    setCourse_list(new_course_list);
    // show toast when couese deleted
    toast.warn("Course Deleted successfully !");
  }

  function handle_edit_in_list(id) {
    // get course to edit
    let course = course_list.find((value) => value.id === id);
    setC_name_before_update(course.name);
    // put course name in input field
    setCourse_name(course.name);
    // toggle is_edit variable to true
    setIs_edit(true);
  }

  function handle_edit_in_form(e) {
    e.preventDefault();
    // clone
    let new_course_list = [...course_list];
    // get course we want to update its value
    let course = new_course_list.find((v) => c_name_before_update === v.name);
    // edit
    course.name = course_name;
    // set state
    setCourse_list(new_course_list);
    // toggle is_edit variable to false
    setIs_edit(false);
    // empty the input field
    setCourse_name("");
  }

  return (
    <div className="App">
      <h1>Crud Application</h1>

      <Form
        course_name={course_name}
        handle_change={handle_change}
        handle_add={handle_add}
        handle_edit_in_form={handle_edit_in_form}
        is_edit={is_edit}
      ></Form>

      <List
        course_list={course_list}
        handle_delete={handle_delete}
        handle_edit_in_list={handle_edit_in_list}
      ></List>

      <Statistics number_of_courses={course_list.length}></Statistics>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
