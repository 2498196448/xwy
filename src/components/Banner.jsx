/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Swiper } from 'antd-mobile';
import { BannerPic } from '../views/Data';

export default function Banner() {
  const [Pic, setPic] = useState();
  useEffect(() => {
    BannerPic()
      .then((res) => {
        setPic(res.data.data.blocks[0].extInfo.banners);
      })
      .catch(() => {
        console.log('ERROR:轮播图请求失败');
      });
  }, []);

  const items =
    Pic &&
    Pic.map((res, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Swiper.Item key={index}>
        <img src={res.pic} className="1" style={{ height: '135px', width: '100%' }} />
      </Swiper.Item>
    ));
  return (
    <Swiper
      loop
      autoplay
      style={{
        '--border-radius': '12px',
        '--width': '338px',
      }}
    >
      {items}
    </Swiper>
  );
}
