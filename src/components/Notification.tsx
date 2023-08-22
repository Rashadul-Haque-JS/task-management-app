import React from 'react';

const Notification = ({ isNotify, setIsNotify }: any) => {
  if (!isNotify) {
    return null; // Don't render anything if isNotify is false
  }

  const handleNotify = () => {
    setIsNotify(false);
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="text-yellow-500 text-xl font-semibold mb-3">
          Task Deleted!
        </div>
        <button
          onClick={handleNotify}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Notification;
