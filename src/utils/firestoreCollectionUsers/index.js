const getCollectionUsers = (firestore, setFireStore) => {
  try {
    firestore
      .collection("users")
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((documentSnapshot) =>
          setFireStore((old) => [...old, documentSnapshot.data().email])
        )
      );
  } catch (e) {
    console.log(e);
  }
};

export default getCollectionUsers;
