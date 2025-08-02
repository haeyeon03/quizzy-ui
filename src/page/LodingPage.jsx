const LoadingPage = () => {
  return (
    <div
      className="full-background d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="mt-3 fs-6 fw-bold">로딩 중입니다...</span>
    </div>
  );
};
export default LoadingPage;
