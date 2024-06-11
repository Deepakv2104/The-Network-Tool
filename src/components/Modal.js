import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          {/* Background content without blur */}
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            {/* Modal content */}
            <div className="relative bg-white dark:bg-gray-800 w-full max-w-md p-6 mx-auto rounded-md shadow-md">
              {/* Close button */}
              <button
                className="absolute top-0 right-0 p-2 -mt-3 -mr-3 bg-white dark:bg-gray-800 rounded-full focus:outline-none"
                onClick={onClose}
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Modal content */}
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
