const PageWrapper = ({ children }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      {children}
    </div>
  );
};

export default PageWrapper;
