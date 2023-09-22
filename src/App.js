import React, { Fragment } from "react";
import CreateJobStep1 from "./components/modals/CreateJobStep1";
import FilledButton from "./components/Inputs/Buttons/FilledButton";
import { useModal } from "./contexts/ModalContext";
import CreateJobStep2 from "./components/modals/CreateJobStep2";

const App = () => {
  const { setIsModal1Open } = useModal();

  return (
    <Fragment>
      <div className="m-5">
        <FilledButton onClick={() => setIsModal1Open(true)}>
          Create Job
        </FilledButton>
      </div>
      <CreateJobStep1 />
      <CreateJobStep2 />
    </Fragment>
  );
};

export default App;
