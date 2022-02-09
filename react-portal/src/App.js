import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Balls
        </Modal>
      </div>

      <div>Other Content</div>
    </>
  );
}

export default App;
