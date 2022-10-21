import { firestore } from "services/firebase";

const addNewTodo = (projects, activeIndex, data, user, setModalNewItem) => {
  projects?.project?.map((project, index) => {
    if (activeIndex === index) {
      const newData = Object.assign(data, { id: Date.now(), checked: false });
      return project.todos.push(newData);
    }
  });
  firestore.collection("projects").doc(user.uid).set(projects);
  setModalNewItem(false);
};

const editTodo = (projects, activeTodoId, user, setModalDetails, data) => {
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
  setModalDetails(false);
};

const editProjects = (projects, activeIndex, user, setModalEditProject, data) => {
  projects.project.map((project, index) => {
    if (activeIndex === index) {
      project.data.project = data.rename;
    }
  });
  firestore.collection("projects").doc(user.uid).set(projects);
  setModalEditProject(false);
};

const changeCheckedTodo = (projects, user, activeTodoId, setModalDetails) => {
  return projects.project.map((project) => {
    project.todos.map((todo) => {
      if (todo.id === activeTodoId) {
        todo.checked = !todo.checked;
      }
    });
    setModalDetails(false);
    firestore.collection("projects").doc(user.uid).set(projects);
  });
};

const deleteTodo = (projects, activeTodoId, user, setModalDetails) => {
  projects.project.map((project) => {
    const filterArr = project.todos.filter((todo) => todo.id !== activeTodoId);
    return (project.todos = filterArr);
  });
  setModalDetails(false);
  firestore.collection("projects").doc(user.uid).set(projects);
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
