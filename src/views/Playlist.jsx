/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { playlistDetail, playlistTrackAll } from './Data';

const Div = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  p {
    margin: 0;
  }
  .header {
    width: 100%;
    height: 70vw;
    background-color: #7f5c74;
    padding: 0px 3.4vw 0px 3.9vw;
    box-sizing: border-box;
    .nav {
      width: 100%;
      height: 50px;
      /* position: fixed; */
      background-color: #7f5c74;
      display: flex;
      justify-content: space-between;
      &_left {
        display: flex;
        align-items: center;
        > p {
          color: #fff;
          font-size: 4.2vw;
          width: 42vw;
          padding-left: 4vw;
        }
      }
      &_right {
        display: flex;
        align-items: center;
        .icon {
          margin-right: 5vw;
        }
      }
    }
    .details {
      display: flex;
      padding-top: 2.6vw;
      box-sizing: border-box;
      justify-content: space-between;
      > div:nth-child(1) {
        position: relative;
        > div {
          width: 20vw;
          height: 20vw;
          background-color: #fff;
          opacity: 0.2;
          border-radius: 8px;
          position: absolute;
          top: -4px;
          left: 7px;
        }
        > img {
          width: 24vw;
          height: 24vw;
          border-radius: 10px;
          position: absolute;
        }
      }
      > div:nth-child(2) {
        width: 67vw;
        h3 {
          margin: 0;
          width: 206.4px;
          color: #fff;
          font-size: 3.6vw;
        }
        > div:nth-child(2) {
          height: 10.5vw;
          display: flex;
          align-items: center;
          > img {
            width: 6vw;
            height: 6vw;
            border-radius: 50%;
          }
          > span {
            color: #fff;
            opacity: 0.5;
            margin: 0px 2vw;
            font-size: 2.73vw;
          }
          > div {
            padding: 1.25vw 3.5vw 1.25vw 2vw;
            background-color: rgba(255, 255, 255, 0.18);
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon {
              font-size: 4vw;
              opacity: 0.5;
            }
            > span {
              color: #fff;
              opacity: 0.5;
            }
          }
        }
        > div:nth-child(3) {
          display: flex;
          > span {
            margin-right: 1.4vw;
            height: 23.5px;
            line-height: 23.5px;
            text-align: center;
            color: #fff;
            display: block;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 2.5vw;
            .icon {
              font-size: 4.5vw;
            }
          }
        }
      }
    }
    .text {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 3.8vw;
      > p {
        margin: 0px;
        width: 83vw;
        height: 18px;
        color: #fff;
        opacity: 0.5;
        font-size: 12px;
        overflow: hidden;
      }
      .icon {
        font-size: 4vw;
      }
    }
    .transpond {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 3.5vw;
      > div {
        width: 108px;
        height: 9.9vw;
        font-size: 3vw;
        display: flex;
        color: #fff;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 22px;
        .icon {
          font-size: 5vw;
          margin-right: 1.8vw;
        }
        > span {
          font-weight: 600;
        }
      }
      > div:nth-child(3) {
        background-color: rgb(255, 38, 88);
      }
    }
  }
  .content {
    width: 100%;
    background-color: #fff;
    margin-top: -14px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 0px 3.8vw;
    box-sizing: border-box;
    .title {
      height: 13vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > div:nth-child(1) {
        display: flex;
        align-items: center;
        .icon {
          font-size: 30px;
          color: rgb(237, 62, 32);
        }
        > p:nth-child(2) {
          font-size: 3.7vw;
          margin: 0px 2.3vw 0px 3.9vw;
        }
        > p:nth-child(3) {
          color: #8c9094;
          font-size: 2.7vw;
        }
      }
      > div:nth-child(2) {
        .icon {
          font-size: 6vw;
        }
        > .icon:nth-child(2) {
          margin-left: 5vw;
          margin-top: 2vw;
        }
      }
    }
    .songlist {
      > div {
        height: 14vw;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > span {
          color: #bfbfbf;
        }
        > div {
          width: 240px;
          overflow: hidden;
          > p:nth-child(1) {
            height: 20px;
            line-height: 20px;
            font-size: 13.5px;
            overflow: hidden;
          }
          > p:nth-child(2) {
            height: 18px;
            color: #808080;
            font-size: 12px;
            overflow: hidden;
          }
        }
      }
    }
  }
`;

function Playlist() {
  const Navigate = useNavigate();
  const location = useLocation();
  // 歌单详情数据
  const [data, setData] = useState();
  useEffect(() => {
    playlistDetail(location.pathname.split('/')[2])
      .then((res) => {
        setData(res.data.playlist);
      })
      .catch(() => {
        console.log('ERROR: 歌单详情数据请求失败');
      });
  }, []);
  // 歌单列表数据
  const [list, setList] = useState();
  useEffect(() => {
    playlistTrackAll(location.pathname.split('/')[2]).then((res) => {
      setList(res.data.songs);
    });
  }, []);
  const Navgiate = useNavigate();
  return (
    <Div>
      <div className="header">
        <div className="nav">
          <div className="nav_left">
            <Icon
              icon="tabler:arrow-up"
              color="white"
              rotate={3}
              width="7vw"
              onClick={() => {
                Navigate('/HomePage');
              }}
            />
            <p>歌单</p>
          </div>
          <div className="nav_right">
            <Icon icon="lucide:search" color="white" width="6vw" className="icon" />
            <Icon icon="ri:more-2-fill" color="white" width="6vw" />
          </div>
        </div>
        <div className="details">
          <div>
            <div />
            <img src={data?.coverImgUrl} alt="" />
          </div>
          <div>
            <h3>{data?.name}</h3>
            <div>
              <img src={data?.creator.avatarUrl} alt="" />
              <span>{data?.creator.nickname}</span>
              <div>
                <Icon icon="iconamoon:sign-plus-fill" color="white" className="icon" />
                <span>关注</span>
              </div>
            </div>
            <div>
              {data &&
                data.tags.map((res) => {
                  return (
                    <span>
                      {res}
                      <Icon icon="iconamoon:arrow-right-2-duotone" color="white" className="icon" />
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="text">
          <p>{data?.description}</p>
          <Icon icon="iconamoon:arrow-right-2-duotone" color="white" className="icon" />
        </div>
        <div className="transpond">
          <div>
            <Icon icon="bxs:share" className="icon" />
            <span>{data?.shareCount}</span>
          </div>
          <div>
            <Icon icon="ph:chat-circle-dots-fill" className="icon" />
            <span>{data?.commentCount}</span>
          </div>
          <div>
            <Icon icon="fluent:star-add-24-filled" className="icon" />
            <span>{data?.subscribedCount}</span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <div>
            <Icon icon="solar:playback-speed-bold" className="icon" />
            <p>播放全部</p>
            <p>(26)</p>
          </div>
          <div>
            <Icon icon="clarity:download-line" className="icon" />
            <Icon icon="lucide:list" className="icon" />
          </div>
        </div>
        <div className="songlist">
          {list &&
            list.map((res, index) => {
              return (
                <div
                  onTouchStart={() => {
                    Navgiate(`/PlaySong/${res.id}`);
                  }}
                >
                  <span>{index + 1}</span>
                  <div>
                    <p>{res.name}</p>
                    <p>
                      {res.ar.map((res) => {
                        return <span>{res.name}</span>;
                      })}
                    </p>
                  </div>
                  <Icon icon="arcticons:fpt-play" width="6vw" />
                  <Icon icon="ant-design:more-outlined" color="rgb(179,179,179)" width="6vw" />
                </div>
              );
            })}
        </div>
      </div>
    </Div>
  );
}
export default Playlist;
