/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useMemo } from 'react';
import { Routes, Route, Navigate, NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
// eslint-disable-next-line import/no-named-as-default-member
import HomePage from './views/HomePage';
// eslint-disable-next-line import/no-named-as-default-member
import RankingList from './views/RankingList';
import Search from './views/Search';
// eslint-disable-next-line import/no-named-as-default-member
import Playlist from './views/Playlist';
import Login from './components/Login';
import PlaySong from './components/PlaySong';
import MvPlay from './components/mvPlay/MvPlay';

export default function App() {
  const navList = [
    {
      to: '/HomePage',
      title: '首页',
      icon: <Icon icon="ri:netease-cloud-music-fill" color="#9297a1" width={22} />,
    },
    {
      to: '/RankingList',
      title: '排行榜',
      icon: <Icon icon="fa6-solid:ranking-star" color="#9297a1" width={22} />,
    },
    {
      to: '/Mine',
      title: '我的',
      icon: <Icon icon="majesticons:music-line" color="#9297a1" width={22} />,
    },
    {
      to: '/Follow',
      title: '关注',
      icon: <Icon icon="octicon:person-add-24" color="#9297a1" width={22} />,
    },
    {
      to: '/Community',
      title: '社区',
      icon: <Icon icon="ph:wechat-logo" color="#9297a1" width={22} />,
    },
  ];
  const location = useLocation();
  const isShowNav = useMemo(() => {
    return (
      location.pathname !== '/Search' &&
      location.pathname !== '/Playlist' &&
      location.pathname !== '/Login' &&
      location.pathname !== '/PlaySong'
    );
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/RankingList" element={<RankingList />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Playlist/:id" element={<Playlist />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PlaySong/:id" element={<PlaySong />} />
        <Route path="/MvPlay/:id" element={<MvPlay />} />
      </Routes>
      {isShowNav && (
        <div
          className="fixed w-[100%] h-[45px] bg-[#fff] left-0 bottom-0 flex items-center justify-around"
          style={{ borderTop: '1px solid rgb(247,248,249)' }}
        >
          {navList.map((item) => (
            <NavLink to={item.to}>
              <div className="flex flex-col justify-around items-center">
                <p className="m-0">{item.icon}</p>
                <p className="text-[#9297a1] text-[12px] m-0">{item.title}</p>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
