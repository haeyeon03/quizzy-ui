import useCustomMove from "../hook/useCustomMove";

const quizzes = [
  { id: 1, title: "퀴즈 1", img: "https://via.placeholder.com/400x200" },
  { id: 2, title: "퀴즈 2", img: "https://via.placeholder.com/400x200" },
  { id: 3, title: "퀴즈 3", img: "https://via.placeholder.com/400x200" },
  { id: 4, title: "퀴즈 4", img: "https://via.placeholder.com/400x200" },
];

const QuizListComponent = () => {
  const { moveToSignup } = useCustomMove();
  return (
    <div className="full-background">
      <div
        className="shadow-lg bg-white p-5 d-flex flex-column"
        style={{
          width: "100%",
          maxWidth: "1300px",
          borderRadius: "2rem",
          minHeight: "560px",
          boxSizing: "border-box",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold" style={{ color: "#5f6fff" }}>
            퀴즈 리스트
          </h3>
        </div>

        <div className="mb-4 d-flex justify-content-start">
          <div style={{ width: "300px" }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="퀴즈 제목 검색"
              />
              <button className="btn btn-outline-secondary">검색</button>
            </div>
          </div>
        </div>

        <div className="row g-3 flex-grow-1" style={{ overflowY: "auto" }}>
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="col-12 col-md-6 col-lg-3">
              <div className="card shadow-sm h-100">
                <img
                  src={quiz.img}
                  className="card-img-top"
                  alt={`${quiz.title} 이미지`}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h6 className="card-title">{quiz.title}</h6>
                  <div className="d-flex gap-2">
                    <button className="btn btn-light w-100 common-btn">
                      풀기
                    </button>
                    <button className="btn btn-light w-100 common-btn">
                      랭크
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination mb-0">
            <li className="page-item disabled">
              <button className="page-link">이전</button>
            </li>
            <li className="page-item active">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">3</button>
            </li>
            <li className="page-item">
              <button className="page-link">다음</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default QuizListComponent;
