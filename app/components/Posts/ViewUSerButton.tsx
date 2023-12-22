"use client";

interface ViewUSerButtonProps {
  userId: number;
}

const ViewUSerButton: React.FC<ViewUSerButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`user id: ${userId}`);
  return (
    <>
      <button
        onClick={handleClick}
        className="py-2 px-4 w-full rounded-md bg-purple-600 hover:bg-purple-700 font-semibold text-white"
      >
        Click
      </button>
    </>
  );
};

export default ViewUSerButton;
