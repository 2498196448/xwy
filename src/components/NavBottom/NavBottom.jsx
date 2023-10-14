import React from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

export default function NavBottom() {
  const navList = [
    {
      to: '/HomePage',
      title: '首页',
      icon: <Icon icon="ri:netease-cloud-music-fill" width={22} />,
    },
    {
      to: '/RankingList',
      title: '排行榜',
      icon: <Icon icon="fa6-solid:ranking-star" width={22} />,
    },
    {
      to: '/Mine',
      title: '我的',
      icon: <Icon icon="majesticons:music-line" width={22} />,
    },
    {
      to: '/Follow',
      title: '关注',
      icon: <Icon icon="octicon:person-add-24" width={22} />,
    },
    {
      to: '/Community',
      title: '社区',
      icon: <Icon icon="ph:wechat-logo" width={22} />,
    },
  ];
  return (
    <div
      className="fixed w-[100%] h-[45px] bg-[#fff] left-0 bottom-0 flex items-center justify-around"
      style={{ borderTop: '1px solid rgb(247,248,249)' }}
    >
      {navList.map((item) => (
        <NavLink
          to={item.to}
          style={({ isActive }) => {
            return { color: isActive ? '#eb4954' : '#9297a1' };
          }}
          className="no-underline"
        >
          <div className="flex flex-col justify-around items-center">
            <p className="m-0">{item.icon}</p>
            <p className="text-[12px] m-0">{item.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
