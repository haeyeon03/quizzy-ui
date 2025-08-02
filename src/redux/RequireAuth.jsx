import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  if (!accessToken) {
    // 로그인 안 된 경우 /login으로 리디렉트
    return <Navigate to="/login" replace />;
  }

  return children; // 통과되면 자식 컴포넌트 출력
};

export default RequireAuth;
