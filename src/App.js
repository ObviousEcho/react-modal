import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal show={show} />
    </div>
  );
}

export default App;
