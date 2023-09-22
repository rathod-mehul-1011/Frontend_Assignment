import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import TextInput from "../Inputs/TextInput";
import FilledButton from "../Inputs/Buttons/FilledButton";
import { useModal } from "../../contexts/ModalContext";
import RadioButton from "../Inputs/RadioButton";
import Label from "../Inputs/Label";

const CreateJobStep2 = () => {
  const { isModal2Open, setIsModal2Open } = useModal();

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
                    placeholder="Minimum"
                  />
                  <TextInput
                    containerClass="w-full"
                    label=""
                    placeholder="Maximum"
                  />
                </div>
                <div className="flex justify-between items-end gap-6">
                  <TextInput
                    containerClass="w-full"
                    label="Salary"
                    placeholder="Minimum"
                  />
                  <TextInput
                    containerClass="w-full"
                    label=""
                    placeholder="Maximum"
                  />
                </div>
                <TextInput label="Total employee" placeholder="ex. 100" />
                <div className="mt-6 text-left">
                  <Label label="Apply type" isRequired />
                  <RadioButton />
                </div>
                <div className="text-right mt-24">
                  <FilledButton className="">Save</FilledButton>
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
