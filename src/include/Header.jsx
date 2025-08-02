import useCustomMove from "../hook/useCustomMove";
import { clearTokens } from "../redux/slice/AuthSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const { moveToQuizList, moveToMypage, moveToLogin } = useCustomMove();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(clearTokens());
    moveToLogin();
  };
  return (
    <header
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4"
      style={{ height: "60px" }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-4">
          <button
            className="navbar-brand fw-bold border-0 bg-transparent p-0"
            style={{ color: "#5f6fff", fontSize: "1.5rem" }}
            onClick={moveToQuizList}
          >
            Quizzy
          </button>

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

        {/* 오른쪽 영역: 로그아웃 */}
        <div>
          <button
            className="nav-link btn btn-link text-muted p-0"
            onClick={handleSubmit}
          >
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
