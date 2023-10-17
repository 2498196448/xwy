/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { sora } from './Data';

const Div = styled.div`
  width: 100%;
  .header {
    width: 100%;
    height: 75px;
    padding: 0px 16.5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > input {
      width: 270px;
      height: 37.5px;
      font-size: 3vw;
      border-radius: 25px;
      background-color: #fff;
      outline: none;
      padding-left: 41px;
      box-sizing: border-box;
      border: none;
      position: relative;
      color: rgb(111, 119, 143);
    }
    > span {
      font-size: 3.7vw;
      font-weight: 600;
    }
  }
  .sort {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 12px 0px;
    > div {
      width: 25vw;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #ccc;
      > span {
        font-size: 3.4vw;
        font-weight: 800;
        margin-left: 7px;
      }
    }
    > div:nth-child(4) {
      border-right: none;
    }
  }
  .like {
    width: 100%;
    padding: 0px 3vw;
    box-sizing: border-box;
    margin-bottom: 20px;
    &_title {
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-size: 4vw;
        font-weight: 600;
      }
    }
    &_content {
      display: flex;
      padding-top: 10px;
      box-sizing: border-box;
      > div {
        font-size: 3.5vw;
        padding: 2vw 3vw;
        box-sizing: border-box;
        border-radius: 22px;
        background-color: #fff;
      }
    }
  }
  .list {
    width: 100%;
    overflow: scroll;
    white-space: nowrap;
    padding-left: 2.4vw;
    box-sizing: border-box;
    display: flex;
    > div {
      margin-right: 2.4vw;
      width: 244px;
      padding-left: 2vw;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 2vw;
      > div {
        width: 202px;
        height: 47px;
        border-bottom: 1px solif #ccc;
        display: flex;
        align-items: center;
        > h1 {
          font-size: 4vw;
          font-weight: 400;
          margin: 0px 3.35vw;
        }
        > div {
          width: 52px;
          height: 20px;
          border-radius: 12px;
          background-color: #f3f4f1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
      }
      > ul {
        width: 100%;
        padding-bottom: 10px;
        li {
          height: 30px;
          display: flex;
          align-items: center;
          font-size: 12px;
          margin: 10px 0px;
          > span {
            width: 33px;
            text-align: center;
          }
          > p {
            width: 187px;
          }
        }
      }
    }
  }
`;
export default function Search() {
  const Navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    sora().then((res) => {
      setData(res.data.playlist.tracks);
      console.log(res.data.playlist.tracks);
    });
  }, []);
  return (
    <Div>
      <div className="header">
        <Icon
          icon="solar:arrow-up-linear"
          rotate={3}
          style={{ fontSize: '28px' }}
          onClick={() => {
            Navigate('/HomePage');
          }}
        />
        <input type="text" placeholder="搜索音乐" />
        <Icon
          icon="iconamoon:search-light"
          style={{
            position: 'absolute',
            top: 28,
            left: 64,
            fontSize: '17px',
            color: 'rgb(111, 119, 143)',
          }}
        />
        <span>搜索</span>
      </div>
      <div className="sort">
        <div>
          <Icon icon="icon-park-solid:people" color="red" style={{ fontSize: '18px' }} />
          <span>歌手</span>
        </div>
        <div>
          <Icon icon="solar:book-bold" rotate={2} color="red" style={{ fontSize: '18px' }} />
          <span>曲风</span>
        </div>
        <div>
          <Icon icon="eva:music-fill" color="red" style={{ fontSize: '22px' }} />
          <span>专区</span>
        </div>
        <div>
          <Icon icon="clarity:microphone-solid" color="red" style={{ fontSize: '18px' }} />
          <span>识曲</span>
        </div>
      </div>
      <div className="like">
        <div className="like_title">
          <h1>猜你喜欢</h1>
          <Icon
            icon="ic:twotone-refresh"
            style={{ fontSize: '19px', color: 'rgb(172, 175, 174)' }}
          />
        </div>
        <div className="like_content">
          <div>洛天依</div>
        </div>
      </div>
      {/* 榜单 */}
      <div className="list">
        <div>
          <div>
            <h1>飙升榜</h1>
            <div>
              <Icon icon="ph:play-fill" style={{ fontSize: '10px', marginRight: '2px' }} />
              <span>播放</span>
            </div>
          </div>
          <ul>
            {data &&
              // eslint-disable-next-line array-callback-return
              data.map((res, index) => {
                if (index < 20) {
                  return (
                    <li key={index}>
                      <span style={index < 3 ? { color: 'red' } : null}>{++index}</span>
                      <p>{res.name}</p>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
        <div>
          <div>
            <h1>新歌榜</h1>
            <div>
              <Icon icon="ph:play-fill" style={{ fontSize: '10px', marginRight: '2px' }} />
              <span>播放</span>
            </div>
          </div>
          <ul>
            {data &&
              // eslint-disable-next-line array-callback-return
              data.map((res, index) => {
                if (index > 19 && index < 40) {
                  return (
                    <li key={index}>
                      <span style={index < 3 ? { color: 'red' } : null}>{index}</span>
                      <p>{res.name}</p>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </div>
    </Div>
  );
}
