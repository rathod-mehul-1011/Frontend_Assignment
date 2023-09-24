import React from "react";
import Button from "./Inputs/Button";
import NetflixSymbol from "../assets/netflixSymbol.png";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { toast } from "react-toastify";
import { useModal } from "../contexts/ModalContext";

const JobCard = (props) => {
  const { job, onJobDeleted } = props;

  const { setIsModal1Open, setCurrentJob } = useModal();

  const handleDeleteJob = async (jobId) => {
    if (!window.confirm("Are you sure you want to delete")) {
      return;
    }
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/jobs/${jobId}`
      );
      if (response.status === 200) {
        toast.success("Successfully deleted");
        onJobDeleted && onJobDeleted(jobId);
      }
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="px-6 py-4 bg-white my-6 md:my-12 rounded-xl border border-iron flex items-start gap-2">
      <img src={NetflixSymbol} className="h-12 w-12 rounded-[5px]" alt="" />
      <div>
        <h1 className="text-2xl font-normal leading-8 text-black">
          {job.jobTitle}
        </h1>
        <p className="para">
          {job.companyName} - {job.industry}
        </p>
        <span className="para text-boulder">
          {job.location} ({job.remoteType})
        </span>
        <p className="para mb-1 md:mb-2 mt-3 md:mt-6">Part-Time (9.00 am - 5.00 pm IST)</p>
        <p className="para mb-1 md:mb-2">
          Experience ({job.experienceMin} - {job.experienceMax} years)
        </p>
        <p className="para mb-1 md:mb-2">
          INR (₹) {job.salaryMin} - {job.salaryMax} / Month
        </p>
        <p className="para mb-3 md:mb-6">{job.totalEmployee} employees</p>
        {job.applyType === "Quick apply" ? (
          <Button className="filled_btn">Apply Now</Button>
        ) : (
          <Button className="outlined_btn">External Apply</Button>
        )}
      </div>
      <div className="ml-auto flex gap-5">
        <PencilSquareIcon
          className="h-6 w-6 text-boulder cursor-pointer"
          onClick={() => {
            setCurrentJob(job);
            setIsModal1Open(true);
          }}
        />
        <TrashIcon
          className="h-6 w-6 text-roman cursor-pointer"
          onClick={() => handleDeleteJob(job.id)}
        />
      </div>
    </div>
  );
};

export default JobCard;
