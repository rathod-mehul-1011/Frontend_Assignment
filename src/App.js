import React, { useState } from "react";
import CreateJob from "./components/modals/CreateJob";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <CreateJob isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  );
};

export default App;

// import React, { useState } from 'react';
// import { Dialog } from '@headlessui/react';

// function App() {
//   const [isModal1Open, setIsModal1Open] = useState(true);
//   const [isModal2Open, setIsModal2Open] = useState(false);

//   const handleNextClick = () => {
//     setIsModal1Open(false);
//     setTimeout(() => {
//       setIsModal2Open(true);
//     }, 300);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       {/* Modal 1 */}
//       <Dialog
//         open={isModal1Open}
//         onClose={() => setIsModal1Open(false)}
//         as="div"
//         className="fixed inset-0 flex justify-center items-center z-10"
//       >
//         <div className={`transition-transform duration-300 transform ${!isModal1Open && 'translate-x-full'}`}>
//           <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
//           <div className="p-8 bg-white w-96 rounded shadow-xl relative z-20">
//             <Dialog.Title>Modal 1</Dialog.Title>
//             <button onClick={handleNextClick} className="bg-blue-500 text-white p-2 mt-4">
//               Next
//             </button>
//           </div>
//         </div>
//       </Dialog>

//       {/* Modal 2 */}
//       <Dialog
//         open={isModal2Open}
//         onClose={() => setIsModal2Open(false)}
//         as="div"
//         className="fixed inset-0 flex justify-center items-center z-10"
//       >
//         <div className={`transition-transform duration-300 transform ${isModal2Open && 'translate-x-0'}`}>
//           <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
//           <div className="p-8 bg-white w-96 rounded shadow-xl relative z-20">
//             <Dialog.Title>Modal 2</Dialog.Title>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   );
// }

// export default App;