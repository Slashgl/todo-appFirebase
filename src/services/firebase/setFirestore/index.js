import { firestore } from "services/firebase";
import { changeEditProject, changeModalDetails, changeModalNewItem } from "store";

const addNewTodo = (projects, activeIndex, data, user, dispatch) => {
  projects?.project?.map((project, index) => {
    if (activeIndex === index) {
      const newData = Object.assign(data, { id: Date.now(), checked: false });
      return project.todos.push(newData);
    }
  });
  firestore.collection("projects").doc(user.uid).set(projects);
  dispatch(changeModalNewItem());
};

const editTodo = (projects, activeTodoId, user, dispatch, data) => {
  projects.project.map((project) => {
    const newArr = project.todos.reduce((acc, todo) => {
      if (todo.id === activeTodoId) {
        return [
          ...acc,
          {
            ...todo,
            date: data.date,
            todo: data.todo,
            priority: data.priority,
            description: data.description,
          },
        ];
      }
      return [...acc, todo];
    }, []);
    project.todos = newArr;
  });
  firestore.collection("projects").doc(user.uid).set(projects);
  dispatch(changeModalDetails());
};

const editProjects = (projects, activeIndex, dispatch, user, data) => {
  projects.project.map((project, index) => {
    if (activeIndex === index) {
      project.data.project = data.rename;
    }
  });
  firestore.collection("projects").doc(user.uid).set(projects);
  dispatch(changeEditProject());
};

const changeCheckedTodo = (projects, user, activeTodoId, dispatch) => {
  projects.project.map((project) => {
    project.todos.map((todo) => {
      if (todo.id === activeTodoId) {
        todo.checked = !todo.checked;
      }
    });
    firestore.collection("projects").doc(user.uid).set(projects);
  });
  dispatch(changeModalDetails());
};

const deleteTodo = (projects, activeTodoId, user, dispatch) => {
  projects.project.map((project) => {
    const filterArr = project.todos.filter((todo) => todo.id !== activeTodoId);
    return (project.todos = filterArr);
  });
  firestore.collection("projects").doc(user.uid).set(projects);
  dispatch(changeModalDetails());
};

const setProjectAsideBar = async (user, project, data) => {
  await firestore
    .collection("projects")
    .doc(user.uid)
    .set(
      (project.length === 0 && {
        project: [{ id: Date.now(), data, todos: [] }],
      }) || {
        project: [...project.project, { id: Date.now(), data, todos: [] }],
      }
    );
};

export { changeCheckedTodo, editTodo, addNewTodo, editProjects, deleteTodo, setProjectAsideBar };
