import React, { useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import TextInput from "../Inputs/TextInput";
import Button from "../Inputs/Button";
import { useModal } from "../../contexts/ModalContext";

const CreateJobStep1 = () => {
  const { isModal1Open, setIsModal1Open, setIsModal2Open, updateFormData } =
    useModal();
  const [errors, setErrors] = useState({});

  const jobTitleRef = useRef();
  const companyNameRef = useRef();
  const industryRef = useRef();
  const locationRef = useRef();
  const remoteTypeRef = useRef();

  const validateStep1 = () => {
    let formErrors = {};

    if (!jobTitleRef.current.value) {
      formErrors.jobTitle = "Job title is required.";
    }
    if (!companyNameRef.current.value) {
      formErrors.companyName = "Company name is required.";
    }
    if (!industryRef.current.value) {
      formErrors.industry = "Industry is required.";
    }

    return formErrors;
  };

  const handleNextClick = () => {
    const validationErrors = validateStep1();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const jobTitle = jobTitleRef.current.value;
      const companyName = companyNameRef.current.value;
      const industry = industryRef.current.value;
      const location = locationRef.current.value;
      const remoteType = remoteTypeRef.current.value;

      const modalOneData = {
        jobTitle,
        companyName,
        industry,
        location,
        remoteType,
      };
      updateFormData(modalOneData);

      setIsModal1Open(false);
      setTimeout(() => {
        setIsModal2Open(true);
      }, 300);
    }
  };

  return (
    <Transition appear show={isModal1Open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsModal1Open(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-[10px] bg-white p-8 align-middle shadow-xl border border-mercury transition-all">
                <div className="flex justify-between items-center text-shark">
                  <h1 className="text-xl font-normal leading-7">
                    Create a job
                  </h1>
                  <h3 className="text-base font-medium leading-6">Step 1</h3>
                </div>
                <TextInput
                  label="Job title"
                  placeholder="ex. UX UI Designer"
                  ref={jobTitleRef}
                  error={errors.jobTitle}
                  isRequired
                />
                <TextInput
                  label="Company name"
                  placeholder="ex. Google"
                  ref={companyNameRef}
                  error={errors.companyName}
                  isRequired
                />
                <TextInput
                  label="Industry"
                  placeholder="ex. Information Technology"
                  ref={industryRef}
                  error={errors.industry}
                  isRequired
                />
                <div className="flex justify-between items-center gap-6">
                  <TextInput
                    label="Location"
                    placeholder="ex. Chennai"
                    ref={locationRef}
                  />
                  <TextInput
                    label="Remote type"
                    placeholder="ex. In-office"
                    ref={remoteTypeRef}
                  />
                </div>
                <div className="text-right mt-24">
                  <Button className="filled_btn" onClick={handleNextClick}>Next</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateJobStep1;
