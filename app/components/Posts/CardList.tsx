const CardList = ({ children, footer }: any) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
        <div className="px-6 py-4">
          {children}
        </div>
        <div className="px-6 pt-4 pb-2">
               {footer}
        </div>
      </div>
    </>
  );
};

export default CardList;
