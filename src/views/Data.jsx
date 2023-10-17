import axios from 'axios';

// 首页
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
// 轮播图
export const BannerPic = () => http.get('/homepage/block/page');
// 分类
export const Sort = () => http.get('/homepage/dragon/ball');
// 推荐歌单
export const SongList = () => http.get('/homepage/block/page/?cookie=200');
// 点击歌单进入详情
export const playlistDetail = (id) => http.get(`playlist/detail?id=${id}`);
export const playlistTrackAll = (id) => http.get('playlist/track/all', { params: { id } });
export const playOther = (id) => http.get('related/playlist', { params: { id } });
// 歌单评论
export const getCommentPlaylist = (id) => http.get('/comment/playlist', { params: { id } });
// 播放歌曲--歌曲信息
export const getSongUrl = (id) => http.get('/song/url/v1', { params: { id, level: 'standard' } }); // 歌曲播放地址
export const getSongDetail = (id) => http.get('/song/detail', { params: { ids: id } });
// 新歌新碟/数字专辑
export const Album = () => http.get('homepage/block/page?cookkie=200');
// 新歌排行榜
export const Leaderboard = () => http.get('/homepage/block/page');
// 热门话题
export const HotTopicData = () => http.get('/personalized');
// 音乐日历
export const Musiccalendar = () =>
  http.get('/calendar?startTime=1677417600000&endTime=1677417600000');

// 排行榜
const path = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv',
});
// 欧美
export const America = () => path.get('?limit=50&area=%E6%AC%A7%E7%BE%8E&cookie=');
// 港台
export const Taiwan = () => path.get('?limit=50&area=%E5%86%85%E5%9C%B0&cookie=');
// 内地
export const outback = () => path.get('?limit=50');
// 日本
export const Japan = () => path.get('?limit=50&area=%E6%97%A5%E6%9C%AC&cookie=');
// 韩国
export const Korea = () => path.get('?limit=50&area=%E9%9F%A9%E5%9B%BD&cookie=');

// mv播放数据
const mvData = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app/mv',
});
export const MvOne = (id) => mvData.get(`detail/info?mvid=${id}`);
export const MvTwo = (id) => mvData.get(`detail?mvid=${id}`);
export const MvThree = (id) => mvData.get(`url?id=${id}`);

// 搜索
const data = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
// 飙升榜
export const sora = () => data.get('/playlist/detail?id=3779629&cookie=');
