import { changeUsers } from "store";

const getCollectionUsers = (firestore, dispatch) => {
  try {
    firestore
      .collection("users")
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((documentSnapshot) =>
          dispatch(changeUsers(documentSnapshot.data().email))
        )
      );
  } catch (e) {
    console.log(e);
  }
};

export default getCollectionUsers;
