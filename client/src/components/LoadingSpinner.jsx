import { Loader } from "lucide-react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative flex items-center justify-center w-24 h-24">
        <div className="absolute inset-0 bg-blue-200 opacity-50 blur-xl rounded-full animate-ping"></div>
        <div className="absolute inset-0 bg-blue-500 opacity-30 blur-lg rounded-full"></div>
        <Loader className="animate-spin h-10 w-10 text-blue-600 z-10" />
      </div>
      <p className="mt-8 text-xl font-medium text-gray-600 tracking-wide">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingSpinner;
