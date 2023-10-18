/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { Icon } from '@iconify/react';
import { Icon } from '@iconify/react';
import { playlistDetail } from '../../views/Data';

export default function SongCover() {
  const location = useLocation();
  const Navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    playlistDetail(location.pathname.split('/')[2]).then((res) => {
      setData(res.data.playlist);
    });
  }, []);
  return (
    <div className="h-[100vh] relative">
      <div
        className="h-[100vh]"
        style={{ backgroundImage: `url(${data?.coverImgUrl})`, filter: 'blur(60px)' }}
      />
      <div className="w-[100%] px-[3vw] box-border absolute top-0">
        <div className="h-[50px] flex items-center justify-end">
          <Icon
            icon="system-uicons:cross"
            color="#fff"
            width="30"
            onClick={() => {
              Navigate(-1);
            }}
          />
        </div>
        <div className="mx-auto w-[55vw] h-[55vw] rounded-[6vw] overflow-hidden mt-[5vw]">
          <img src={data?.coverImgUrl} alt="" className="w-[100%] h-[100%]" />
        </div>
        <p className="text-[#fff] text-[4.2vw] font-[600] text-center w-[100%] overflow-hidden h-[20px] my-[6vw]">
          {data?.name}
        </p>
        <div
          className="w-[90%] h-[1px] mx-auto"
          style={{
            background: 'linear-gradient(to right, rgba(255, 0, 0, 0), #fff, rgba(255, 0, 0, 0))',
          }}
        />
        <div className="flex items-center text-[#fff] h-[12vw] px-[5vw] box-border text-[3.6vw] ">
          <p>标签：</p>
          {data &&
            data.tags.map((res, index) => {
              return (
                <div
                  key={index}
                  className="px-[2vw] pt-[1.1vw] pb-[1.2vw] text-[3.2vw] rounded-[3.2vw] leading-[12px] mx-[1vw]"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  {res}
                </div>
              );
            })}
        </div>
        <p className="text-[#fff] px-[5vw] box-border leading-[5.6vw]">{data?.description}</p>
        <div
          className="flex items-center justify-center rounded-[6vw] w-[22vw] h-[8vw] fixed left-[50%] bottom-[10vw]"
          style={{ border: '1px solid #fff', transform: 'translateX(-50%)' }}
        >
          <p className="text-[#fff] text-[3.8vw]">保存封面</p>
        </div>
      </div>
    </div>
  );
}
