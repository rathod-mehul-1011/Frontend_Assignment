import React, { Fragment, useEffect, useState } from "react";
import CreateJobStep1 from "./components/modals/CreateJobStep1";
import Button from "./components/Inputs/Button";
import { useModal } from "./contexts/ModalContext";
import CreateJobStep2 from "./components/modals/CreateJobStep2";
import JobCard from "./components/JobCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const App = () => {
  const { setIsModal1Open } = useModal();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleJobDeleted = async (jobId) => {
    setJobs((currentJobs) => currentJobs.filter((job) => job.id !== jobId));
  };

  const getJobs = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
      if (response.status === 200) {
        setJobs(response.data);
      }
    } catch (error) {
      toast.error("Failed to fetch jobs");
    }
    setLoading(false);
  };
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <Fragment>
      <ToastContainer />
      <div className="container mx-auto pt-5 px-5 md:px-0">
        <Button className="filled_btn" onClick={() => setIsModal1Open(true)}>
          Create Job
        </Button>
        {loading && (
          <div className="flex justify-center items-center h-[calc(100vh-100px)]">
            <h1 className="text-xl font-medium text-black">Loading...</h1>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[83.118px]">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onJobDeleted={handleJobDeleted} />
          ))}
        </div>
      </div>
      <CreateJobStep1 />
      <CreateJobStep2 getJobs={getJobs} />
    </Fragment>
  );
};

export default App;
