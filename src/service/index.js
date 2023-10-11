import axios from 'axios';

const http = axios.create({
  // baseURL请求的公共地址
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});

// 获取榜单数据
export const getTopList = () => http.get('/toplist/detail');

export default {};
