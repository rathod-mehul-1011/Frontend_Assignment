import React from "react";
import Button from "./Inputs/Button";

const JobCard = (props) => {
  const { jobTitle, companyName, industry, location, remoteType } = props
  return (
    <div className="px-6 py-4 bg-white my-12 rounded-xl border border-iron flex items-start gap-2">
      <img
        src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png"
        className="h-12 w-12 rounded-[5px]"
        alt=""
      />
      <div>
        <h1 className="text-2xl font-normal leading-8 text-black">UX UI Designer</h1>
        <p className="para">Great Vibes - Information Technology</p>
        <span className="para text-boulder">Chennai, Tamilnadu, India (In-office)</span>
        <p className="para mb-2 mt-6">Part-Time (9.00 am - 5.00 pm IST)</p>
        <p className="para mb-2">Experience (1 - 2 years)</p>
        <p className="para mb-2">INR (₹) 30,000 - 60,000 / Month</p>
        <p className="para mb-6">51-200 employees</p>
        <Button className="filled_btn">Apply Now</Button>
      </div>
    </div>
  );
};

export default JobCard;
