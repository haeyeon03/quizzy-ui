import { createSlice } from "@reduxjs/toolkit";

// 초기 상태는 localStorage에서 불러오거나 null
const initialState = {
  accessToken: localStorage.getItem("accessToken") || null,
  nickname: localStorage.getItem("nickname") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens(state, action) {
      state.accessToken = action.payload.accessToken;
      state.nickname = action.payload.nickname;

      // localStorage에도 저장
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("nickname", action.payload.nickname);
    },
    clearTokens(state) {
      state.accessToken = null;
      state.nickname = null;

      // localStorage에서 삭제
      localStorage.removeItem("accessToken");
      localStorage.removeItem("nickname");
    },
  },
});

export const { setTokens, clearTokens } = authSlice.actions;
export default authSlice.reducer;
