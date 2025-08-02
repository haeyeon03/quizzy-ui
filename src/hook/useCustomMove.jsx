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
    navigate("/quizList");
  };

  const moveToMypage = () => {
    navigate("/myPage");
  };

  return {
    moveToLogin,
    moveToSignup,
    moveToQuizList,
    moveToMypage,
  };
};
export default useCustomMove;
