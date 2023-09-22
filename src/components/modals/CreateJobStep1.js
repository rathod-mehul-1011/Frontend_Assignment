import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import TextInput from "../Inputs/TextInput";
import FilledButton from "../Inputs/Buttons/FilledButton";
import { useModal } from "../../contexts/ModalContext";

const CreateJobStep1 = () => {
  const { isModal1Open, setIsModal1Open, setIsModal2Open } = useModal();

  const handleNextClick = () => {
    setIsModal1Open(false);
    setTimeout(() => {
      setIsModal2Open(true);
    }, 300);
  };

  return (
    <Transition appear show={isModal1Open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsModal1Open(false)}>
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
                  isRequired
                />
                <TextInput
                  label="Company name"
                  placeholder="ex. Google"
                  isRequired
                />
                <TextInput
                  label="Industry"
                  placeholder="ex. Information Technology"
                  isRequired
                />
                <div className="flex justify-between items-center gap-6">
                  <TextInput label="Location" placeholder="ex. Chennai" />
                  <TextInput label="Remote type" placeholder="ex. In-office" />
                </div>
                <div className="text-right mt-24">
                  <FilledButton onClick={handleNextClick}>Next</FilledButton>
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
