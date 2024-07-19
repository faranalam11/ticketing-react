import React from 'react';

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl mb-4">Are you sure?</h2>
        <div className="flex justify-end">
          <button onClick={onConfirm} className="bg-red-500 text-white p-2 rounded mr-2">Confirm</button>
          <button onClick={onCancel} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
