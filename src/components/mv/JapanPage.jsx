/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { Japan } from '../../views/Data';

const Div = styled.div`
  .video {
    width: 100%;
    padding: 0px 4vw;
    box-sizing: border-box;
    margin-top: 10px;
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
          height: 5vw;
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
          height: 4vw;
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

// 日本
export default function KoreaPage() {
  const Navigate = useNavigate();
  const [america, setamerica] = useState();
  useEffect(() => {
    Japan().then((res) => {
      setamerica(res.data.data);
    });
  }, []);
  return (
    <Div>
      <div className="video">
        {america &&
          america.map((res, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div
                key={index}
                className="video_list"
                onTouchStart={() => {
                  Navigate(`/MvPlay/${res.id}`);
                }}
              >
                <div className="img">
                  <img src={res.cover} alt="" />
                  <span>
                    <Icon icon="ph:play-fill" className="text-[2.6vw]" />
                    <span>{res.playCount}</span>
                  </span>
                </div>
                <div className="text">
                  <div>
                    <p style={index < 3 ? { color: '#ff0000' } : null}>{++index}</p>
                    <p>{res.mv.title}</p>
                  </div>
                  <div>
                    <p>
                      <Icon
                        icon="mdi:triangle"
                        color={res.lastRank > 0 ? 'rgb(240,83,87)' : 'rgb(87,181,228)'}
                        style={{ fontSize: '7.5px' }}
                        rotate={res.lastRank < 0 ? 2 : null}
                      />
                      {/* Math.abs()返回一个数的绝对值 */}
                      {Math.abs(res.lastRank)}
                    </p>
                    <p>
                      {res.artists.map((data, indexs) => {
                        return (
                          <span key={indexs}>
                            <span>{`${data.name}/`}</span>
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Div>
  );
}
