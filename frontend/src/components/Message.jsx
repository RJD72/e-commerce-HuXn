/* eslint-disable react/prop-types */
const Message = ({ variant, children }) => {
  const getVariantCLass = () => {
    switch (variant) {
      case "success":
        return "bg-green-100 text-green-800";
      case "error":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };
  return <div className={`p-4 rounded ${getVariantCLass()}`}>{children}</div>;
};
export default Message;
