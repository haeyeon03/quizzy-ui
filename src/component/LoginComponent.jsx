import useCustomMove from "../hook/useCustomMove";

const LoginComponent = () => {
  const { moveToSignup } = useCustomMove();
  return (
    <div className="full-background" style={{ height: "100vh" }}>
      <div
        className="p-5 shadow-lg bg-white"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "1.5rem" }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#5f6fff" }}>
          Quizzy
        </h2>
        <form>
          <div className="mb-3">
            <label htmlFor="inputId" className="form-label fw-semibold">
              아이디
            </label>
            <input
              type="text"
              className="form-control"
              id="inputId"
              placeholder="example@quizzy.com"
              style={{ fontSize: "14px" }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="inputPw" className="form-label fw-semibold">
              비밀번호
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPw"
              placeholder="비밀번호를 입력하세요"
              style={{ fontSize: "14px" }}
            />
          </div>
          <button type="submit" className="btn btn-light w-100 common-btn">
            로그인
          </button>
        </form>

        <div className="d-flex align-items-center text-center text-secondary my-4">
          <div className="border-bottom flex-grow-1 me-3"></div>
          <small className="text-muted">또는</small>
          <div className="border-bottom flex-grow-1 ms-3"></div>
        </div>

        <div className="d-flex justify-content-center gap-3 mb-4">
          {/* Google */}
          <button
            className="social-btn"
            title="Google"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ddd",
              backgroundColor: "white",
              transition: "0.2s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#f0f0f0";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
            />
          </button>

          {/* Kakao */}
          <button
            className="social-btn"
            title="Kakao"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #FEE500",
              backgroundColor: "#FEE500",
              transition: "0.2s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#f7e600";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#FEE500";
            }}
          >
            <img
              src="https://cdn.icon-icons.com/icons2/2429/PNG/512/kakaotalk_logo_icon_147272.png"
              alt="Kakao"
              style={{ width: "22px", height: "22px" }}
            />
          </button>
        </div>

        <button
          className="btn btn-light w-100 common-btn"
          onClick={moveToSignup}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
