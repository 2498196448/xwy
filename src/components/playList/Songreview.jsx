/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { getCommentPlaylist, playlistDetail } from '../../views/Data';

const Div = styled.div`
  .review::-webkit-scrollbar {
    display: none;
  }
`;

// 歌单评论
export default function SongReview(props) {
  const [data, setData] = useState();
  useEffect(() => {
    getCommentPlaylist(props.reviewData).then((res) => {
      setData(res.data.comments);
    });
  }, []);
  const [list, setList] = useState();
  useEffect(() => {
    playlistDetail(props.reviewData).then((res) => {
      setList(res.data.playlist);
    });
  }, []);
  return (
    <Div className="bg-[#F7FAFC]">
      <div className="px-[3vw] py-[3vw] bg-[#fff] text-center">
        <span className="text-[4.5vw] font-[600]">评论({list?.commentCount})</span>
        <Icon icon="fluent:share-20-regular" width="20" className="fixed right-[3vw]" />
      </div>
      <div className="py-[2.667vw] px-[3.822vw] h-[18.933vw] flex items-center bg-[#fff]">
        <div className="flex items-center">
          <div className="h-[18.933vw] w-[18.933vw] border border-red-400 rounded-[3vw]">
            <img
              src={list?.coverImgUrl}
              alt=""
              className="h-[18.933vw] w-[18.933vw] rounded-[3vw]"
            />
          </div>
          <div className="w-[67vw]">
            <div className="flex items-center pl-[2vw]">
              <span
                className="block text-[#C84A3B] rounded-[1vw] text-[12px] px-[2px] leading-[15px]"
                style={{ border: '1px solid #C84A3B' }}
              >
                歌单
              </span>
              <span className=" pl-[2vw] text-[14px] leading-[14px] w-[200px] overflow-hidden">
                {list?.name}
              </span>
            </div>
            <p className=" pl-[2vw] flex items-center mt-[1vw]">
              <span>by</span>
              <span className="text-[#81B4DC] pl-[2vw]">{list?.creator?.nickname}</span>
            </p>
          </div>
        </div>
        <Icon icon="uiw:right" width="20" />
      </div>
      {/* 评论 */}
      <div className="mt-[3vw] bg-[#fff]">
        <div className="pt-[4.267vw] flex items-center justify-between overflow-hidden px-[3.822vw]">
          <div className="text-[4.5vw] font-[600]">评论区</div>
          <div className="font-[600]">
            <span>推荐</span>
            <span className="px-[2.7vw] text-[#a9a9a9]">|</span>
            <span>最热</span>
            <span className="px-[2.7vw] text-[#a9a9a9]">|</span>
            <span>最新</span>
          </div>
        </div>
        {/* 评论 */}
        <div className="review mt-[4.178vw] h-[62vh] overflow-scroll">
          {data?.map((item, index) => (
            <div key={index} className="overflow-hidden px-[3.822vw]">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-[9.422vw] h-[9.422vw] rounded-[50%] border border-[red]">
                      <img
                        src={item?.user?.avatarUrl}
                        alt=""
                        className="w-[10vw] h-[10vw] rounded-[50%]"
                      />
                    </div>
                    <div className="pl-[2.4vw]">
                      <p className="font-bold mb-[1px]">{item?.user?.nickname}</p>
                      <p className="text-[2vw] text-[#a9a9a9]">{item?.timeStr}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#a9a9a9]">{item?.likedCount}</span>
                    <Icon
                      icon="iconamoon:like-light"
                      width="20"
                      color="#a9a9a9"
                      className="mb-[2px]"
                    />
                  </div>
                </div>
                <p className="w-[100%] pl-[11.5vw] break-words text-[4vw] leading-[6vw] mt-[1.689vw] box-border">
                  {item?.content}
                </p>
                <div className="ml-[11.5vw] mt-[3vw] flex items-center">
                  <span className="text-[#93A8C9]">4条回复</span>
                  <Icon icon="mingcute:right-line" width="20" color="#93A8C9" />
                </div>
              </div>
              <div className="h-[1px] bg-[#ccc] my-[3.467vw] ml-[11.5vw] w-[100%]" />
            </div>
          ))}
        </div>
      </div>
    </Div>
  );
}
