const LoadingSpinner = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col justify-center items-center gap-4">
      <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm font-medium">Loading, please wait...</p>
    </div>
  );
};

export default LoadingSpinner;
