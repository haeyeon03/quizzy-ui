import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useRef } from "react";
import useCustomMove from "../hook/useCustomMove";

const initState = {
  userId: "",
  nickname: "",
  password: "",
  confirmPassword: "",
};

const SignUpComponent = () => {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({ ...initState });
  const { moveToLogin } = useCustomMove();
  const userIdInputRef = useRef(null);
  const nicknameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  const handleForm = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isEmpty(signupForm.userId)) {
      alert("아이디를 입력해 주세요.");
      userIdInputRef.current.focus();
      return false;
    }

    if (isEmpty(signupForm.nickname)) {
      alert("닉네임을 입력해 주세요.");
      nicknameInputRef.current.focus();
      return false;
    }

    if (isEmpty(signupForm.password)) {
      alert("비밀번호를 입력해 주세요.");
      passwordInputRef.current.focus();
      return false;
    }

    if (!isValidPassword(signupForm.password, signupForm.confirmPassword)) {
      alert("비밀번호가 일치하지 않습니다.");
      passwordInputRef.current.focus();
      confirmPasswordInputRef.current.value = "";
      return false;
    }

    axios({
      method: "post",
      url: "http://localhost:8080/api/challengers/",
      data: {
        challengerId: signupForm.userId,
        nickname: signupForm.nickname,
        password: signupForm.password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.data == 1) {
          alert("회원가입 완료 되었습니다.");
          moveToLogin();
        } else {
          alert("회원가입 실패 하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isEmpty = (str) => {
    return !str || str.trim() === "";
  };

  const isValidPassword = (pw, cfpw) => {
    return pw == cfpw ? true : false;
  };

  return (
    <div className="full-background " style={{ height: "100vh" }}>
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
          <div className="mb-3">
            <label htmlFor="nickname" className="form-label fw-semibold">
              닉네임
            </label>
            <input
              type="text"
              className="form-control"
              name="nickname"
              id="nickname"
              placeholder="닉네임을 입력해주세요"
              onChange={handleForm}
              ref={nicknameInputRef}
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
          <div className="mb-4">
            <label htmlFor="confirmPassword	" className="form-label fw-semibold">
              비밀번호 확인
            </label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="비밀번호를 다시 입력하세요"
              onChange={handleForm}
              ref={confirmPasswordInputRef}
              style={{ fontSize: "14px" }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mt-5">
            <button
              type="button"
              className="btn btn-light common-btn"
              style={{ width: "48px" }}
              onClick={() => navigate(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className="btn btn-light common-btn"
              style={{ flex: "1", marginLeft: "12px" }}
              onClick={handleSubmit}
            >
              계정 생성
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;
