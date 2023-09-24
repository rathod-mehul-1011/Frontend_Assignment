import React, { useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import TextInput from "../Inputs/TextInput";
import Button from "../Inputs/Button";
import { useModal } from "../../contexts/ModalContext";
import RadioButton from "../Inputs/RadioButton";
import Label from "../Inputs/Label";
import axios from "axios";

const CreateJobStep2 = () => {
  const { isModal2Open, setIsModal2Open, updateFormData, formData } =
    useModal();

  const experienceMinRef = useRef();
  const experienceMaxRef = useRef();
  const salaryMinRef = useRef();
  const salaryMaxRef = useRef();
  const totalEmployeeRef = useRef();
  const applyTypeRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const handleSaveClick = () => {
    const experienceMin = experienceMinRef.current.value;
    const experienceMax = experienceMaxRef.current.value;
    const salaryMin = salaryMinRef.current.value;
    const salaryMax = salaryMaxRef.current.value;
    const totalEmployee = totalEmployeeRef.current.value;
    const applyType = applyTypeRef.current;

    const modalTwoData = {
      experienceMin,
      experienceMax,
      salaryMin,
      salaryMax,
      totalEmployee,
      applyType,
    };
    updateFormData(modalTwoData);
    sendFormData(formData);
  };

  const handleKeyPress = (e) => {
    const keyCode = e.which; // Get key code of key pressed
    if (keyCode < 48 || keyCode > 57) {
      // If it's not numeric
      e.preventDefault(); // Prevent character input
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text");
    if (!/^\d+$/.test(pasteData)) {
      // Check if pasted content is numeric
      e.preventDefault(); // If not, prevent paste action
    }
  };

  const isDataValid = () => {
    // Add your validation logic. This is a simple example.
    return (
      formData.experienceMin &&
      formData.experienceMax &&
      formData.salaryMin &&
      formData.salaryMax &&
      formData.totalEmployee &&
      formData.applyType
    );
  };

  const sendFormData = async (data) => {
    if (!isDataValid()) {
      console.error("Data is not valid for submission:", data);
      return; // Don't proceed if data is not valid
    }
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/jobs`, data);
      
      console.log(response);
      setIsModal2Open(false);
    } catch (error) {
      console.error("There was an error sending the data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Transition appear show={isModal2Open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsModal2Open(false)}
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
                  <h3 className="text-base font-medium leading-6">Step 2</h3>
                </div>
                <div className="flex justify-between items-end gap-6">
                  <TextInput
                    containerClass="w-full"
                    label="Experience"
                    ref={experienceMinRef}
                    onKeyPress={handleKeyPress}
                    onPaste={handlePaste}
                    placeholder="Minimum"
                  />
                  <TextInput
                    containerClass="w-full"
                    label=""
                    placeholder="Maximum"
                    ref={experienceMaxRef}
                    onKeyPress={handleKeyPress}
                    onPaste={handlePaste}
                  />
                </div>
                <div className="flex justify-between items-end gap-6">
                  <TextInput
                    containerClass="w-full"
                    label="Salary"
                    placeholder="Minimum"
                    ref={salaryMinRef}
                    onKeyPress={handleKeyPress}
                    onPaste={handlePaste}
                  />
                  <TextInput
                    containerClass="w-full"
                    label=""
                    placeholder="Maximum"
                    ref={salaryMaxRef}
                    onKeyPress={handleKeyPress}
                    onPaste={handlePaste}
                  />
                </div>
                <TextInput
                  label="Total employee"
                  placeholder="ex. 100"
                  ref={totalEmployeeRef}
                  onKeyPress={handleKeyPress}
                  onPaste={handlePaste}
                />
                <div className="mt-6 text-left">
                  <Label label="Apply type" />
                  <div className="flex items-center gap-4">
                    <RadioButton
                      value={"Quick apply"}
                      name={"applyType"}
                      onChange={() => {
                        applyTypeRef.current = "Quick apply";
                      }}
                    />
                    <RadioButton
                      value={"External apply"}
                      name={"applyType"}
                      onChange={() => {
                        applyTypeRef.current = "External apply";
                      }}
                    />
                  </div>
                </div>
                <div className="text-right mt-24">
                  <Button className="filled_btn" onClick={handleSaveClick}>Save</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateJobStep2;
