import React from "react";
import { firestore } from "./services/firebase";
import { Registration } from "components";

const App = () => {
  return <Registration firestore={firestore} />;
};

export default App;
