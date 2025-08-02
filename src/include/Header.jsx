import useCustomMove from "../hook/useCustomMove";

const Header = () => {
  const { moveToQuizList, moveToMypage } = useCustomMove();

  return (
    <header
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4"
      style={{ height: "60px" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-brand fw-bold border-0 bg-transparent p-0"
          style={{ color: "#5f6fff", fontSize: "1.5rem" }}
          onClick={() => (window.location.href = "/")} // 또는 moveToHome() 커스텀 훅
        >
          Quizzy
        </button>

        <div className="d-flex align-items-center gap-3">
          <button
            className="nav-link btn btn-link text-muted p-0"
            onClick={moveToQuizList}
          >
            퀴즈 리스트
          </button>
          <button
            className="nav-link btn btn-link text-muted p-0"
            onClick={moveToMypage}
          >
            마이페이지
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
