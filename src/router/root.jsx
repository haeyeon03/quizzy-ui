import { createBrowserRouter, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingPage from "../page/LodingPage";
import RequireAuth from "../redux/RequireAuth";

const LoginPage = lazy(() => import("../page/LoginPage"));
const SignupPage = lazy(() => import("../page/SignupPage"));
const QuizPage = lazy(() => import("../page/QuizPage"));

const root = createBrowserRouter([
  // 루트 접속시 /login으로 이동
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  // 로그인
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LoginPage />
      </Suspense>
    ),
  },
  // 회원가입
  {
    path: "/signup",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <SignupPage />
      </Suspense>
    ),
  },

  // 홈 & 퀴즈 검색 화면
  {
    path: "/quiz",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <RequireAuth>
          <QuizPage />
        </RequireAuth>
      </Suspense>
    ),
  },

  // // 퀴즈 상세 (풀기 전 문제 미리보기 or 바로 풀기)
  // {
  //   path: "/quiz/:quizId",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <QuizDetailPage /> {/* 퀴즈 정보, 문제 수 등 */}
  //     </Suspense>
  //   ),
  // },

  // // 퀴즈 풀이
  // {
  //   path: "/quiz/play/:quizId",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <QuizPlayPage /> {/* 문제/정답 선택, 타이머 */}
  //     </Suspense>
  //   ),
  // },

  // // 퀴즈 풀이 완료 후 결과
  // {
  //   path: "/quiz/result/:quizId",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <QuizResultPage /> {/* 점수, 정답, 내 순위 */}
  //     </Suspense>
  //   ),
  // },

  // // 퀴즈별 전체 랭킹
  // {
  //   path: "/quiz/rank:quizId",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <QuizRankPage /> {/* 전체 유저 랭킹 */}
  //     </Suspense>
  //   ),
  // },

  // // 전체 퀴즈 순위 (관리자 제외)
  // {
  //   path: "/rank",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <AllRankingPage /> {/* 전체 퀴즈 기준 랭킹 */}
  //     </Suspense>
  //   ),
  // },
  // // 마이페이지 (개인정보 수정)
  // {
  //   path: "/mypage",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <MyPage /> {/* 닉네임 수정, 패스워드 변경 */}
  //     </Suspense>
  //   ),
  // },

  // // 내가 푼 퀴즈 목록
  // {
  //   path: "/mypage/quiz",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <MyQuizHistoryPage /> {/* 내 기록 보기 */}
  //     </Suspense>
  //   ),
  // },

  // // 내가 푼 퀴즈 상세 결과
  // {
  //   path: "/mypage/quiz/result",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <MyQuizResultPage /> {/* 내가 푼 퀴즈 결과 */}
  //     </Suspense>
  //   ),
  // }, // 관리자 퀴즈 목록
  // {
  //   path: "/admin/quiz",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <AdminQuizListPage /> {/* 퀴즈 검색, 수정 버튼 */}
  //     </Suspense>
  //   ),
  // },

  // // 퀴즈 등록/수정 공용 폼
  // {
  //   path: "/admin/quiz/form", // 등록
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <QuizFormPage /> {/* 신규 등록용 */}
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/admin/quiz/form/:quizId", // 수정
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <QuizFormPage /> {/* 수정용 */}
  //     </Suspense>
  //   ),
  // },

  // // 관리자 - 도전자 목록 조회
  // {
  //   path: "/admin/challengers",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <ChallengerListPage /> {/* 닉네임 검색 */}
  //     </Suspense>
  //   ),
  // },

  // // 관리자 - 도전자 상세 정보 (수정/삭제)
  // {
  //   path: "/admin/challengers/:challengerId",
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <ChallengerDetailPage /> {/* 정보 수정/삭제 */}
  //     </Suspense>
  //   ),
  // },
]);

export default root;
