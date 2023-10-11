import React, { useState, useRef } from 'react';
import styled from 'styled-components';

// 组件
import { Tabs, Swiper } from 'antd-mobile';

// 页面组件
import KoreaPage from '../components/mv/KoreaPage';
import JapanPage from '../components/mv/JapanPage';
import OutbackPage from '../components/mv/OutbackPage';
import TaiwanPage from '../components/mv/TaiwanPage';
import AmericaPage from '../components/mv/AmericaPage';

const Div = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #fff;
  .nav {
    width: 100%;
    margin-bottom: 10px;
    h1 {
      font-size: 4.2vw;
      font-weight: 600;
      color: #010101;
      text-align: center;
      padding: 4vw;
      box-sizing: border-box;
    }
    .Navigation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      > div {
        height: 44px;
        width: 75px;
        font-size: 15px;
        color: #9599a3;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .video {
    width: 100%;
    padding: 0px 4vw;
    box-sizing: border-box;
    &_list {
      margin-bottom: 10px;
      .img {
        width: 100%;
        height: 52vw;
        border-radius: 3vw;
        overflow: hidden;
        position: relative;
        margin-bottom: 10px;
        > img {
          width: 100%;
          height: 100%;
        }
        > span {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 12px;
          color: #fff;
          display: flex;
          align-items: center;
          > span {
            margin-left: 4px;
          }
        }
      }
      .text {
        width: 100%;
        > div:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
          p:nth-child(1) {
            font-size: 4.3vw;
            margin-right: 4px;
          }
          p:nth-child(2) {
            width: 315px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 4vw;
            font-weight: 600;
          }
        }
        > div:nth-child(2) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          p:nth-child(1) {
            color: #999;
          }
          p:nth-child(2) {
            color: #7c7c7c;
            width: 315px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
`;

const tabItems = [
  { key: 'america', title: '欧美' },
  { key: 'taiwan', title: '港台' },
  { key: 'outback', title: '内地' },
  { key: 'japan', title: '日本' },
  { key: 'Korea', title: '韩国' },
];

export default function RankingList() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <Div>
      <div className="nav">
        <h1>MV排行榜</h1>
      </div>
      <Tabs
        activeKey={tabItems[activeIndex].key}
        onChange={(key) => {
          const index = tabItems.findIndex((item) => item.key === key);
          setActiveIndex(index);
          swiperRef.current?.swipeTo(index);
        }}
      >
        {tabItems.map((item) => (
          <Tabs.Tab title={item.title} key={item.key} />
        ))}
      </Tabs>
      <Swiper
        direction="horizontal"
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveIndex(index);
        }}
      >
        <Swiper.Item>
          <AmericaPage />
        </Swiper.Item>
        <Swiper.Item>
          <TaiwanPage />
        </Swiper.Item>
        <Swiper.Item>
          <OutbackPage />
        </Swiper.Item>
        <Swiper.Item>
          <JapanPage />
        </Swiper.Item>
        <Swiper.Item>
          <KoreaPage />
        </Swiper.Item>
      </Swiper>
    </Div>
  );
}
