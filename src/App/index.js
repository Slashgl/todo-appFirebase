import React from "react";
import { Registration } from "components";

const App = ({ firestore }) => {
  return <Registration firestore={firestore} />;
};

export default App;
