const ErrorMessage = ({ message }) => {
  return (
    <div className="w-full rounded-lg text-gray-900 bg-red-400 mx-auto px-4 py-2 max-w-md">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
