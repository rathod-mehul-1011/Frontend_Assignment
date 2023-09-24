import React, { Fragment } from "react";
import CreateJobStep1 from "./components/modals/CreateJobStep1";
import Button from "./components/Inputs/Button";
import { useModal } from "./contexts/ModalContext";
import CreateJobStep2 from "./components/modals/CreateJobStep2";
import JobCard from "./components/JobCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { setIsModal1Open } = useModal();

  return (
    <Fragment>
      <ToastContainer />
      <div className="max-w-[1743.12px] mx-auto pt-5">
        <Button className="filled_btn" onClick={() => setIsModal1Open(true)}>
          Create Job
        </Button>
        <div className="grid grid-cols-2 gap-x-[83.118px]">
          <JobCard />
        </div>
      </div>
      <CreateJobStep1 />
      <CreateJobStep2 />
    </Fragment>
  );
};

export default App;
