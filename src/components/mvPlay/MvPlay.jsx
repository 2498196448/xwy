/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NoticeBar } from 'antd-mobile';
import styled from 'styled-components';
import { MvOne, MvTwo, MvThree } from '../../views/Data';

const Div = styled.div``;

export default function MvPlay() {
  const Navigate = useNavigate();
  const location = useLocation();
  // 点赞收藏数据
  const [mvOne, setMvOne] = useState();
  useEffect(() => {
    MvOne(location.pathname.split('/')[2]).then((res) => {
      setMvOne(res.data);
    });
  }, []);
  // 作者信息数据
  const [mvTwo, setMvTwo] = useState();
  useEffect(() => {
    MvTwo(location.pathname.split('/')[2]).then((res) => {
      setMvTwo(res.data.data);
      // console.log(res.data.data);
    });
  }, []);
  const [mvThree, setThree] = useState();
  useEffect(() => {
    MvThree(location.pathname.split('/')[2]).then((res) => {
      setThree(res.data.data.url);
    });
  }, []);
  const [unfold, setUnfold] = useState(false);
  const videoRef = useRef();
  const playMv = () => {
    videoRef.current.play();
  };
  const pauseMv = () => {
    videoRef.current.pause();
  };
  const [isPlay, setIsPlay] = useState(true);
  return (
    <div className="page w-[100%] bg-[#000] h-[100vh] overflow-hidden">
      {/* 头部 */}
      <div className="nav flex px-[6vw] h-[12vw] box-border w-[100%] items-center justify-between my-[3vw]">
        <Icon
          icon="ep:arrow-up-bold"
          color="white"
          rotate={3}
          width={22.5}
          onClick={() => Navigate(-1)}
        />
        <div className="w-[72px] flex items-center justify-between">
          <Icon icon="fluent:picture-in-picture-enter-20-regular" color="white" width={26} />
          <Icon icon="ri:more-2-line" color="white" rotate={2} width={22.5} />
        </div>
      </div>
      {/* 视频 */}
      <div className="w-[100%] h-[211px] mt-[30vw]">
        <video
          ref={videoRef}
          src={mvThree}
          loop
          autoPlay
          className="w-[100%]"
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            isPlay ? playMv() : pauseMv();
            setIsPlay(!isPlay);
          }}
        />
      </div>
      {/* 作者信息 */}
      <div className="details w-[270px] mt-[20vw] pl-[4vw]">
        <div className="mb-[3vw]">
          <div className="h-[9vw] flex items-center">
            <div
              className="w-[9vw] h-[9vw] rounded-full box-border overflow-hidden"
              style={{ border: '2px solid #fff' }}
            >
              <img src="" alt="" />
            </div>
            <p className="text-[#fff] text-[4vw] mx-[2vw]">{mvTwo?.artistName}</p>
            <div className="w-[7vw] h-[5vw] bg-[rgb(235,77,68)] rounded-[2vw] flex items-center justify-center">
              <Icon icon="iconamoon:sign-plus-bold" color="white" />
            </div>
          </div>
          <div />
        </div>
        <div className="flex w-[270px] items-center justify-center">
          <div className="h-[20px] w-[250px] text-[3.2vw] flex items-center">
            <div className="w-[7.3vw] h-[20px] leading-[20px] bg-[rgb(51,51,51)] text-[rgb(144,144,144)] mr-[2vw] text-center">
              MV
            </div>
            <p className="text-[#fff] overflow-hidden">{mvTwo?.name}</p>
          </div>
          {unfold ? (
            <Icon
              icon="ep:arrow-up"
              color="rgb(144,144,144)"
              rotate={2}
              height={20}
              onClick={() => {
                setUnfold(!unfold);
              }}
            />
          ) : (
            <Icon
              icon="ep:arrow-up"
              color="rgb(144,144,144)"
              height={20}
              onClick={() => {
                setUnfold(!unfold);
              }}
            />
          )}
        </div>
        <div
          className="text-[14px] text-[#fff] mt-[1.5vw]"
          style={unfold ? { display: 'block' } : { display: 'none' }}
        >
          {mvTwo?.desc}
        </div>
      </div>
      {/* 音乐旋转 */}
      <div className="flex px-[4vw] box-border w-[100%] items-center justify-between mt-[6vw]">
        <div className="w-[270px] h-[19] flex items-center">
          <Icon icon="fontisto:music-note" color="rgb(179,179,179)" width={15} />
          <div className="w-[34vw] text-[#e8e8e8] text-[14px] px-[16px] overflow-hidden leading-[21px]">
            <NoticeBar
              content={mvTwo?.name}
              icon=" "
              className="!px-[0] !bg-transparent !border-transparent"
            />
          </div>
          <Icon
            icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
            color="rgb(179,179,179)"
            width={15}
          />
        </div>
        <img src={mvTwo?.cover} alt="" className="w-[7vw] h-[7vw] rounded-full" />
      </div>
      {/* 侧边定位 */}
      <div className="fixed top-[76vw] right-[4.1vw] text-[3vw] text-[rgb(234,234,234)]">
        <div className="mb-[4vw]">
          <Icon
            icon="tabler:thumb-down-filled"
            color="white"
            rotate={2}
            width={22.5}
            style={{ transform: 'scaleX(-1)', marginBottom: '2vw' }}
          />
          <p className="text-center">{mvOne?.likedCount}</p>
        </div>
        <div className="mb-[4vw]">
          <Icon icon="eva:message-circle-fill" color="white" width={22.5} className="mb-[2vw]" />
          <p className="text-center">{mvOne?.commentCount}</p>
        </div>
        <div className="mb-[4vw]">
          <Icon
            icon="tabler:thumb-down-filled"
            color="white"
            rotate={2}
            width={22.5}
            className="mb-[2vw]"
          />
          <p className="text-center">{mvOne?.shareCount}</p>
        </div>
        <div className="mb-[4vw]">
          <Icon
            icon="fluent:collections-24-filled"
            color="white"
            width={22.5}
            className="mb-[2vw]"
          />
          <p className="text-center">收藏</p>
        </div>
      </div>
      {/* 进度条 */}
      <div className="progressBar" />
      {/* 评论 */}
      <div className="review" />
    </div>
  );
}
