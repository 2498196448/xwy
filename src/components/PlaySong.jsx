/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import { ProgressBar } from 'antd-mobile';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Glass from 'react-blur';
import { getSongUrl, getSongDetail } from '../views/Data';

const Div = styled.div`
  @keyframes rotate {
    from {
      transform: translateX(0%) translateY(0%) rotate(0deg);
    }
    to {
      transform: translateX(0%) translateY(0%) rotate(360deg);
    }
  }
  .animation {
    animation: rotate 10s linear infinite;
  }
  .haft {
    transition: transform 0.5s ease-in-out;
  }
  .react-blur-canvas {
    position: absolute;
    z-index: -1;
  }
`;

export default function PlaySong() {
  const Navigate = useNavigate();
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  // 播放歌曲地址
  const [songUrl, setSongUrl] = useState();
  useEffect(() => {
    getSongUrl(location.pathname.split('/')[2]).then((res) => {
      setSongUrl(res.data.data[0].url);
    });
  }, []);

  // 歌曲信息地址
  const [songDetail, setSongDetail] = useState([]);
  const [imgUrl, setImgUrl] = useState();
  useEffect(() => {
    getSongDetail(location.pathname.split('/')[2]).then((res) => {
      setSongDetail(res.data.songs);
      // console.log(res.data.songs[0]);
      setImgUrl(res.data.songs[0]);
    });
  }, []);

  // 控制播放
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioClick = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Div className="page">
      <Glass img={imgUrl?.al?.picUrl} blurRadius={40}>
        <div className="z-10">
          <div>
            {songDetail &&
              songDetail.map((res, index) => {
                return (
                  <div key={index} className="w-[100%] z-[10]">
                    <div className="nav h-[15vw] w-[100%] flex px-[4vw] box-border items-center justify-between">
                      <Icon
                        icon="fluent:ios-arrow-24-filled"
                        color="white"
                        rotate={3}
                        width={22.5}
                        onClick={() => {
                          Navigate(-1);
                        }}
                      />
                      <div className="w-[60vw] flex flex-col items-center justify-center">
                        <p className="text-[4vw] text-[#fff] h-[5vw] overflow-hidden mt-[2vw]">
                          {res.name}
                        </p>
                        <div className="flex mt-[2vw] items-center">
                          {res.ar.map((data) => {
                            return <p className="text-[2.8vw] text-[#bcbfbf]">{data.name}</p>;
                          })}
                          <p
                            style={{ borderRadius: '8px' }}
                            className="text-[2vw] bg-[rgb(132,134,139)] text-[#d8d8d8] w-[36px] h-[20px] leading-[20px] ml-[1vw] text-center"
                          >
                            关注
                          </p>
                        </div>
                      </div>
                      <Icon icon="solar:share-linear" color="white" width={22.5} />
                    </div>
                    <div className="h-[120vw] w-[100%] overflow-hidden relative">
                      <img
                        src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png"
                        alt=""
                        className="haft h-[40vw] absolute left-[48%] top-[10vw] z-20 origin-top-left"
                        style={
                          isPlaying
                            ? { transform: 'rotate(-45deg)' }
                            : { transform: 'rotate(-5deg)' }
                        }
                      />
                      <div
                        style={{ backgroundColor: 'rgba(255, 255, 255, .3)' }}
                        className="w-[80vw] h-[80vw] rounded-full mx-[auto] mt-[26vw]"
                      >
                        <img
                          src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                          alt=""
                          className="w-[80vw] h-[80vw] absolute z-[10]"
                        />
                        <img
                          src={res.al.picUrl}
                          alt=""
                          className={isPlaying ? '' : 'animation'}
                          style={{
                            width: '50vw',
                            height: '50vw',
                            position: 'absolute',
                            left: '25%',
                            top: '34%',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="w-[100%] h-[130px] z-[20]">
            <div className="flex mt-[5vw] items-center justify-evenly">
              <Icon
                icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
                color="white"
                height={22.5}
              />
              <Icon
                icon="streamline:interface-download-circle-arrow-circle-down-download-internet-network-server-upload"
                color="white"
                height={22.5}
              />
              <Icon icon="octicon:people-24" color="white" height={22.5} />
              <Icon icon="icon-park-outline:message" color="white" height={22.5} />
              <Icon icon="mingcute:more-2-line" color="white" height={22.5} />
            </div>
            <div className="h-[8vw] px-[5vw] box-border mt-[3vw] flex items-center justify-between">
              <span style={{ color: 'rgba(255, 255, 255, 0.8)' }} className="">
                0.00
              </span>
              <ProgressBar
                percent={50}
                style={{
                  '--fill-color': '#fff',
                  '--track-width': '1px',
                  '--track-color': '#CDE2FF',
                  width: '258px',
                }}
              />
              <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>3.00</span>
            </div>
            <div className="flex items-center  justify-evenly">
              <Icon icon="radix-icons:loop" color="white" height={22.5} />
              <Icon icon="ion:play-skip-back-circle" color="white" height={22} />
              {isPlaying ? (
                <Icon
                  icon="icon-park-solid:play"
                  color="white"
                  rotate={2}
                  height={46.5}
                  onClick={() => audioClick()}
                />
              ) : (
                <Icon
                  icon="zondicons:pause-solid"
                  color="white"
                  height={44}
                  onClick={() => audioClick()}
                />
              )}
              <audio ref={audioRef} src={songUrl} loop autoPlay="true" />
              <Icon icon="ion:play-skip-back-circle" color="white" rotate={2} height={22} />
              <Icon icon="ion:list" color="white" height={22.5} />
            </div>
          </div>
        </div>
      </Glass>
    </Div>
  );
}
