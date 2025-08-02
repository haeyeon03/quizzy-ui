import { useNavigate } from "react-router-dom";

const useCustomMove = () => {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/");
  };

  const moveToSignup = () => {
    navigate("/signup");
  };

  const moveToQuizList = () => {
    navigate("/quiz");
  };

  const moveToMypage = () => {
    navigate("/mypage");
  };

  return {
    moveToLogin,
    moveToSignup,
    moveToQuizList,
    moveToMypage,
  };
};
export default useCustomMove;
