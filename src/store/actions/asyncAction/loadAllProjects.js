import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firestore } from "services/firebase";
import { addNewProject, changeUser } from "store";

export const loadAllProjects = () => (dispatch) => {
  const auth = getAuth();

  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      await firestore
        .collection("projects")
        .doc(user.uid)
        .get()
        .then((doc) => dispatch(addNewProject(doc.data())));
      dispatch(changeUser(user));
    }
  });
};
