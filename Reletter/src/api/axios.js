import axios from 'axios';

const api = axios.create({
  baseURL: 'https://two025-challkathon-itworks-be-xrja.onrender.com', // 백엔드 주소
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 백엔드에서 쿠키 인증 쓰면 유지 (필요 없으면 제거해도 됨)
});

export default api;
