import { useState, useRef } from "react";
import useCustomMove from "../hook/useCustomMove";
import axios from "axios";
import { setTokens } from "../redux/slice/AuthSlice";
import { useDispatch } from "react-redux";

const initState = {
  userId: "",
  password: "",
};

const LoginComponent = () => {
  const dispatch = useDispatch();
  const { moveToQuizList, moveToSignup } = useCustomMove();
  const [loginForm, setLoginForm] = useState({ ...initState });
  const userIdInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleForm = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isEmpty(loginForm.userId)) {
      alert("아이디를 입력해 주세요.");
      userIdInputRef.current.focus();
      return false;
    }
    if (isEmpty(loginForm.password)) {
      alert("비밀번호를 입력해 주세요.");
      passwordInputRef.current.focus();
      return false;
    }

    axios({
      method: "post",
      url: "http://localhost:8080/api/challengers/login",
      params: {
        username: loginForm.userId,
        password: loginForm.password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          const accessToken = res.data.data.accessToken;
          const nickname = res.data.data.nickname;
          // Redux 상태 + localStorage에 저장
          dispatch(setTokens({ accessToken, nickname }));
          moveToQuizList();
        } else {
          alert("로그인 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isEmpty = (str) => {
    return !str || str.trim() === "";
  };

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
            <label htmlFor="userId" className="form-label fw-semibold">
              아이디
            </label>
            <input
              type="text"
              className="form-control"
              name="userId"
              id="userId"
              placeholder="example@quizzy.com"
              onChange={handleForm}
              ref={userIdInputRef}
              style={{ fontSize: "14px" }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              비밀번호
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              onChange={handleForm}
              ref={passwordInputRef}
              style={{ fontSize: "14px" }}
            />
          </div>
          <button
            type="button"
            className="btn btn-light w-100 common-btn"
            onClick={handleSubmit}
          >
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
