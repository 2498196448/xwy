/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import '../font_7bu873hb4o6/iconfont.css';
import { Icon } from '@iconify/react';
import { Swiper, Popup } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

// 组件
import Banner from '../components/Banner';
import SideBar2 from '../components/Sidebar2';
import Kebab from '../components/kebab';

// 数据
import { Sort, SongList, Leaderboard, HotTopicData, Musiccalendar, Album } from './Data';

const Homepage = styled.div`
  padding-bottom: 48px;
  /* 头部 */
  .header {
    width: 100%;
    height: 210px;
    background: linear-gradient(#e6e6fb, #f1f1f1);
    .search {
      width: 100vw;
      height: 20vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 10px;
      box-sizing: border-box;
      > span:nth-child(1) {
        font-size: 24px;
        color: #374d5b;
      }
      > div {
        width: 75vw;
        height: 10vw;
        line-height: 10vw;
        border-radius: 25px;
        border: 2px solid rgb(217, 210, 244);
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(to right, rgb(217, 221, 253), rgb(243, 217, 239));
        > input {
          height: 100%;
          outline: none;
          border: none;
          color: rgb(129, 137, 161);
          background-color: rgba(0, 0, 0, 0);
          font-size: 4.47vw;
          color: rgb(156, 163, 190);
        }
      }
      > span:nth-child(3) {
        font-size: 26px;
      }
    }
    .banner {
      width: 338px;
      height: 139px;
      margin: 0px auto;
    }
  }
  /* 分类 */
  .sort {
    width: 100%;
    height: 20vw;
    overflow: hidden;
    padding: 0px 4vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    overflow-x: scroll;
    > div {
      height: 75px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-right: 6.1vw;
      padding: 5px 0px;
      box-sizing: border-box;
      > img {
        width: 49px;
      }
      .red-image {
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
      }
      > p {
        font-size: 2.78vw;
        color: #666f7d;
        margin: 0px;
      }
    }
  }
  .sort::-webkit-scrollbar {
    display: none;
  }
  /* 推荐歌单 */
  .songList {
    width: 100%;
    &_title {
      width: 345px;
      height: 12vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0px auto;
      h1 {
        font-size: 4vw;
        font-weight: 800;
        color: #374d5b;
        > span {
          font-size: 15px;
        }
      }
      > span {
        font-size: 22px;
      }
    }
    &_List {
      width: 100%;
      padding: 0px 7px;
      box-sizing: border-box;
      overflow: scroll;
      white-space: nowrap;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .songPic {
        width: 31vw;
        height: 174px;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding-top: 4px;
        margin-right: 3vw;
        &_bg {
          height: 31vw;
          width: 31vw;
          position: relative;
          > div {
            width: 85%;
            height: 100%;
            position: absolute;
            top: -4px;
            left: 9px;
            background-color: rgb(221, 221, 221);
            border-radius: 8px;
            z-index: 0;
          }
          > img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            position: absolute;
            z-index: 2;
            display: block;
          }
        }
        > p {
          width: 31vw;
          height: 40px;
          line-height: 20px;
          color: #3e4759;
          font-size: 2.78vw;
          white-space: normal;
          overflow: hidden;
        }
      }
    }
    &_List::-webkit-scrollbar {
      display: none;
    }
  }
  /* 新歌新碟/数字专辑 */
  .album {
    width: 100%;
    &_title {
      width: 345px;
      height: 10vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2vw auto 0px;
      h1 {
        font-size: 4vw;
        font-weight: 800;
        color: #374d5b;
        > span {
          font-size: 15px;
        }
      }
      > span {
        font-size: 22px;
      }
    }
    &_content {
      box-sizing: border-box;
      overflow: scroll;
      white-space: nowrap;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_card {
        width: 330px;
        /* height: 208px; */
        margin: 0px 2vw 2vw 2vw;
        > ul {
          margin: 0px;
          padding: 0px;
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2.7vw 0px 0px 2vw;
            img {
              width: 54.4px;
              height: 54.4px;
              border-radius: 10px;
            }
            > div {
              padding-left: 10px;
              box-sizing: border-box;
              p:nth-child(1) {
                width: 264.5px;
                color: #3e4759;
                font-size: 3.5vw;
                margin-bottom: 2px;
              }
              p:nth-child(2) {
                width: 264.5px;
                color: #79838f;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    &_content::-webkit-scrollbar {
      display: none;
    }
  }
  /* 排行榜 */
  .Leaderboard {
    width: 100%;
    &_title {
      width: 345px;
      height: 12vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0px auto;
      h1 {
        font-size: 4vw;
        font-weight: 800;
        color: #374d5b;
        > span {
          font-size: 15px;
        }
      }
      > span {
        font-size: 22px;
      }
    }
    &_content {
      width: 100%;
      display: flex;
      white-space: nowrap;
      overflow: scroll;
      padding: 3.2px 0px 0px 4.5px;
      box-sizing: border-box;
      &_card {
        width: 88vw;
        /* height: 268px; */
        background-color: #fff;
        padding: 4vw 0px;
        box-sizing: border-box;
        margin: 0px 7.5px 7.5px;
        border-radius: 10px;
        &_title {
          width: 304px;
          height: 12vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-left: 7.5px;
          padding-right: 5vw;
          box-sizing: border-box;
          > h1 {
            color: #374d5b;
            font-size: 15px;
            font-weight: 800;
          }
          > p {
            color: #939ba1;
            font-size: 16px;
          }
        }
        &_content {
          > div {
            width: 100%;
            height: 64.5px;
            padding-left: 7.5px;
            box-sizing: border-box;
            margin-top: 10px;
            display: flex;
            align-items: center;
            > img {
              width: 14.5vw;
              height: 14.5vw;
              border-radius: 10px;
            }
            > div {
              display: flex;
              align-items: center;
              padding-left: 3.2vw;
              margin-left: 1vw;
              > span:nth-child(1) {
                font-size: 12px;
                font-weight: 800;
                margin-right: 3vw;
              }
              > div {
                width: 40vw;
                overflow: hidden;
                > p:nth-child(1) {
                  color: #3e4759;
                  font-size: 3.5vw;
                }
                > p:nth-child(2) {
                  color: #79838f;
                  font-size: 2.36vw;
                }
              }
              > span:nth-child(3) {
                margin-left: 4vw;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    &_content::-webkit-scrollbar {
      display: none;
    }
  }
  /* 热门话题 */
  .hotTopic {
    width: 100%;
    &_title {
      width: 345px;
      height: 12vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0px auto;
      h1 {
        font-size: 4vw;
        font-weight: 800;
        color: #374d5b;
        > span {
          font-size: 15px;
        }
      }
      > span {
        font-size: 22px;
      }
    }
    &_content {
      width: 100%;
      display: flex;
      align-items: center;
      padding-left: 15px;
      box-sizing: border-box;
      white-space: nowrap;
      overflow: scroll;
      &_card {
        width: 68vw;
        height: 28vw;
        border-radius: 10px;
        background-color: skyblue;
        padding: 4vw 3vw 4vw;
        box-sizing: border-box;
        margin-right: 3vw;
        > div:nth-child(1) {
          height: 22.5px;
          display: flex;
          align-items: center;
          > p {
            font-size: 4vw;
            color: #fff;
          }
        }
        > div:nth-child(2) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          > div {
            width: 157.5px;
            height: 55.5px;
            overflow: hidden;
            > p:nth-child(1) {
              height: 18px;
              line-height: 18px;
              color: #d7d7d7;
              font-size: 12px;
            }
            > p:nth-child(2) {
              line-height: 18px;
              color: #fff;
              font-size: 12px;
              padding-right: 10px;
              white-space: normal;
              box-sizing: border-box;
            }
          }
          > img {
            width: 13.75vw;
            height: 13.75vw;
            border-radius: 10px;
          }
        }
      }
    }
    &_content::-webkit-scrollbar {
      display: none;
    }
  }
  /* 音乐日历 */
  .musicCalendar {
    &_title {
      width: 345px;
      height: 12vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px auto 0px;
      h1 {
        font-size: 4vw;
        font-weight: 800;
        color: #374d5b;
        > span {
          font-size: 15px;
        }
      }
      > span {
        font-size: 22px;
      }
    }
    &_content {
      padding: 4vw 4vw 1.8vw 4vw;
      box-sizing: border-box;
      background-color: #fff;
      width: 91vw;
      margin-left: 4vw;
      border-radius: 10px;
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        > div {
          width: 255px;
          > p:nth-child(1) {
            line-height: 18px;
            color: #aaadb5;
            font-size: 12px;
          }
          > p:nth-child(2) {
            line-height: 20px;
            color: #3e4558;
            font-size: 3.68vw;
          }
        }
        > img {
          width: 15vw;
          height: 15vw;
          border-radius: 10px;
        }
      }
    }
  }
`;

function HomePage() {
  const Navigate = useNavigate()
  const [data, setData] = useState();
  useEffect(() => {
    Sort()
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => {
        console.log('ERROR:分类条数据请求失败');
      });
  }, []);

  const [song, setSong] = useState();
  useEffect(() => {
    SongList()
      .then((res) => {
        const data = res.data.data.blocks[1].creatives;
        setSong(data);
      })
      .catch(() => {
        console.log('ERROR:推荐歌单数据请求失败');
      });
  }, []);

  const [disc, setDisc] = useState();
  useEffect(() => {
    Album()
      .then((res) => {
        setDisc(res.data.data.blocks[5].creatives);
      })
      .catch(() => {
        console.log('ERROR:新歌新碟/数字专辑数据请求失败');
      });
  }, []);

  const [Leader, setLeader] = useState();
  useEffect(() => {
    Leaderboard()
      .then((res) => {
        setLeader(res.data.data.blocks[3].creatives);
      })
      .catch(() => {
        console.log('ERROR:新歌排行榜数据请求失败');
      });
  }, []);

  const [hot, setHot] = useState();
  useEffect(() => {
    HotTopicData()
      .then((res) => {
        setHot(res.data.result);
      })
      .catch(() => {
        console.log('ERROR:热门话题数据请求失败');
      });
  }, []);

  const [music, setMusic] = useState();
  useEffect(() => {
    Musiccalendar()
      .then((res) => {
        setMusic(res.data.data.calendarEvents);
      })
      .catch(() => {
        console.log('ERROR:音乐日历数据请求失败');
      });
  }, []);
  const [visible3, setVisible3] = useState(false)

  return (
    <Homepage>
      {/* 头部 */}
      <div className="header">
        <div className="search">
          <span className="iconfont" onClick={() => {
            setVisible3(true)
          }}>&#xe502;</span>
          <Popup
            visible={visible3}
            onMaskClick={() => {
              setVisible3(false)
            }}
            position='left'
            bodyStyle={{ width: '84vw', background: 'rgb(241,241,241)' }}
          >
            <SideBar2 />
          </Popup>
          <div>
            <Icon
              icon="iconamoon:search"
              color="rgb(129,137,161)"
              style={{ marginLeft: '9px', fontSize: '16px' }}
              onClick={() => {
                Navigate('/Search')
              }}
            />
            <input type="text" placeholder="Love Is Gone" />
            <Icon
              icon="mdi:line-scan"
              color="rgb(129,137,161)"
              style={{ marginRight: '14px', fontSize: '16px' }}
            />
          </div>
          <span className="iconfont">&#xe610;</span>
        </div>
        <div className="banner">
          <Banner />
        </div>
      </div>
      {/* 分类 */}
      <div className="sort">
        {data &&
          data.map((res, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>
                <img src={res.iconUrl} alt="" className="red-image" />
                <p>{res.name}</p>
              </div>
            );
          })}
      </div>
      {/* 推荐歌单 */}
      <div className="songList">
        {/* 标题 */}
        <div className="songList_title">
          <h1>
            推荐歌单<span className="iconfont">&#xe628;</span>
          </h1>
          <Kebab title="推荐歌单" />
        </div>
        {/* 内容 res.resources[uiElement{image{imageUrl},mainTitle{title}}] */}
        <div className="songList_List">
          <div className="songPic">
            <Swiper direction="vertical" indicator={() => null}>
              {song &&
                // eslint-disable-next-line array-callback-return, consistent-return
                song.map((res, index) => {
                  if (index === 0) {
                    // eslint-disable-next-line no-shadow
                    return res.resources.map((res, index) => (
                      <Swiper.Item key={index}>
                        <div className="songPic_bg" onClick={() => {
                          Navigate(`/Playlist/${res.resourceId}`)
                        }} aria-hidden="true">
                          <img src={res.uiElement.image.imageUrl} alt="" />
                          <div />
                        </div>
                        <p>{res.uiElement.mainTitle.title}</p>
                      </Swiper.Item>
                    ));
                  }
                })}
            </Swiper>
          </div>
          {song &&
            // eslint-disable-next-line array-callback-return, consistent-return
            song.map((res, index) => {
              if (index !== 0) {
                return (
                  <div key={index} className="songPic" onClick={() => {
                    Navigate(`/Playlist/${res.creativeId}`)
                  }} aria-hidden="true">
                    <div className="songPic_bg">
                      <img src={res.uiElement.image.imageUrl} alt="" />
                      <div />
                    </div>
                    <p>{res.uiElement.mainTitle.title}</p>
                  </div>
                );
              }
            })}
        </div>
      </div >
      {/* 新歌新碟/数字专辑 */}
      < div className="album" >
        {/* 标题 */}
        < div className="album_title" >
          <h1>
            新歌新碟/数字专辑<span className="iconfont">&#xe628;</span>
          </h1>
          <Kebab title="新歌新碟/数字专辑" />
        </div >
        {/* 内容 */}
        < div className="album_content" >
          {disc &&
            disc.map((res) => {
              return (
                <div className="album_content_card">
                  <ul>
                    {res.resources.map((data) => {
                      return (
                        <li>
                          <img src={data.uiElement.image.imageUrl} alt="" />
                          <div>
                            <p>{data.uiElement.mainTitle.title}</p>
                            <p>{data.uiElement.subTitle.title}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })
          }
        </div >
      </div >
      {/* 排行榜 */}
      < div className="Leaderboard" >
        {/* 标题 */}
        < div className="Leaderboard_title" >
          <h1>
            排行榜<span className="iconfont">&#xe628;</span>
          </h1>
          <Kebab title="排行榜" />
        </div >
        {/* 内容 */}
        < div className="Leaderboard_content" >
          {Leader &&
            Leader.map((res, index) => {
              return (
                <div className="Leaderboard_content_card" key={index}>
                  <div className="Leaderboard_content_card_title">
                    <h1>
                      编辑推荐榜<span className="iconfont">&#xe628;</span>
                    </h1>
                    <p>精选宝藏新歌</p>
                  </div>
                  <div className="Leaderboard_content_card_content">
                    {res.resources.map((data, index) => {
                      return (
                        <div>
                          <img src={data.uiElement.image.imageUrl} alt="" />
                          <div>
                            <span
                              style={
                                // eslint-disable-next-line no-nested-ternary
                                index === 0
                                  ? { color: '#c28e28' }
                                  : index === 1
                                    ? { color: '#818aac' }
                                    : { color: '#cd8354' }
                              }
                            >
                              {++index}
                            </span>
                            <div>
                              <p>{data.uiElement.mainTitle.title}</p>
                              <p>佚名</p>
                            </div>
                            <span
                              style={
                                data.uiElement.labelText.text === '新晋'
                                  ? { color: '#39b184' }
                                  : { color: '#ff3836' }
                              }
                            >
                              {data.uiElement.labelText.text}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div >
      </div >
      {/* 热门话题 */}
      < div className="hotTopic" >
        <div className="hotTopic_title">
          <h1>
            热门话题<span className="iconfont">&#xe628;</span>
          </h1>
          <Kebab title="热门话题" />
        </div>
        <div className="hotTopic_content">
          {hot &&
            hot.map((res, index) => {
              return (
                <div
                  key={index}
                  className="hotTopic_content_card"
                  style={
                    index % 2 === 0
                      ? { backgroundColor: 'rgb(148, 148, 148)' }
                      : { backgroundColor: 'rgb(134, 133, 170)' }
                  }
                >
                  <div>
                    <Icon icon="basil:comment-solid" style={{ fontSize: '18px', color: '#fff' }} />
                    <p>热门</p>
                  </div>
                  <div>
                    <div>
                      <p>{`${res.trackCount}万热度`}</p>
                      <p>{res.name}</p>
                    </div>
                    <img src={res.picUrl} alt="" />
                  </div>
                </div>
              );
            })}
        </div>
      </div >
      {/* 音乐日历 */}
      < div className="musicCalendar" >
        <div className="musicCalendar_title">
          <h1>
            音乐日历<span className="iconfont">&#xe628;</span>
          </h1>
          <Kebab title="音乐日历" />
        </div>
        <div className="musicCalendar_content">
          {music &&
            music.map((res, index) => {
              return (
                <div key={index}>
                  <div>
                    <p>{res.onlineTime}</p>
                    <p>{res.title}</p>
                  </div>
                  <img src={res.imgUrl} alt="" />
                </div>
              );
            })}
        </div>
      </div >
    </Homepage >
  );
}

export default HomePage;
