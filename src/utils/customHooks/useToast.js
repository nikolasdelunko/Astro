import React, { useState, useEffect } from "react";

const Toast = ({ message }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t-2 border-purple-900 text-purple-900">
      {message}
    </div>
  );
};

const useToast = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timerId;

    if (message) {
      // Show the toast message for 3 seconds
      timerId = setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    return () => clearTimeout(timerId);
  }, [message]);

  const showToast = (msg) => setMessage(msg);

  return [Toast, showToast];
};

export default useToast;
