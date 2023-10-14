/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Popup } from 'antd-mobile';
import '../font_7bu873hb4o6/iconfont.css';
import { Icon } from '@iconify/react';

export default function Kebab(porps) {
  const [visible1, setVisible1] = useState(false);
  return (
    <div>
      <span
        className="iconfont"
        onClick={() => {
          setVisible1(true);
        }}
      >
        &#xe8c4;
      </span>
      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false);
        }}
        onClose={() => {
          setVisible1(false);
        }}
        bodyStyle={{
          height: '173px',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="h-[10vw] flex items-center justify-between px-[5vw]"
          style={{ borderBottom: '1px solid rgb(238,238,238)' }}
        >
          <p className="text-[rgb(105,109,115)] text-[3vw]  font-bold">{porps.title}</p>
          <div
            className="w-[6vw] h-[6vw] rounded-full bg-[rgb(242,242,243)]"
            onClick={() => {
              setVisible1(false);
            }}
          >
            <Icon icon="basil:cross-outline" color="rgb(105,109,115)" rotate={1} width={22.5} />
          </div>
        </div>
        <div className="pl-[5vw]">
          <div className="flex items-center h-[12vw]">
            <Icon
              icon="mingcute:thumb-up-2-line"
              width="6vw"
              color="rgb(22,22,22)"
              className="mr-[2vw]"
            />
            <p className="text-[3vw] text-[rgb(58,57,63)]">优先推荐</p>
          </div>
          <div className="flex items-center h-[12vw]">
            <Icon
              icon="icon-park-outline:unlike"
              width="6vw"
              color="rgb(22,22,22)"
              className="mr-[2vw]"
            />
            <p className="text-[3vw] text-[rgb(58,57,63)]">减少推荐</p>
          </div>
          <div className="flex items-center h-[12vw]">
            <Icon
              icon="mingcute:more-4-line"
              width="6vw"
              color="rgb(22,22,22)"
              className="mr-[2vw]"
            />
            <p className="text-[3vw] text-[rgb(58,57,63)]">更多内容</p>
          </div>
        </div>
      </Popup>
    </div>
  );
}
