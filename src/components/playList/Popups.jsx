/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Popup, Space } from 'antd-mobile';

// 歌单弹出层
export default function Popups() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <div>
      <Icon
        icon="ri:more-2-fill"
        color="white"
        width="6vw"
        onClick={() => {
          setVisible1(true);
        }}
      />
      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false);
        }}
        bodyStyle={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
      >
        <div>
          <div
            className="w-[100%] px-[5vw] box-border h-[16vw] text-[3.5vw] leading-[16vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            今天送开始听起|私人雷达
          </div>
          <Space direction="vertical" className="w-[100%]">
            <div
              className="h-[12vw] flex items-center px-[5vw] box-border"
              onClick={() => {
                setVisible2(true);
              }}
            >
              <Icon icon="lucide:list-music" width="6vw" className="mr-[2vw]" />
              <p>选择歌曲排序</p>
            </div>
            <div className="h-[12vw] flex items-center px-[5vw] box-border">
              <Icon icon="carbon:trash-can" width="6vw" className="mr-[2vw]" />
              <p>清空下载文件</p>
            </div>
            <div
              className="h-[12vw] flex items-center px-[5vw] box-border"
              onClick={() => {
                setVisible3(true);
              }}
            >
              <Icon icon="ic:outline-report-problem" width="6vw" className="mr-[2vw]" />
              <p>举报</p>
            </div>
          </Space>
        </div>
      </Popup>
      {/* 弹出层2 */}
      <Popup
        visible={visible2}
        onMaskClick={() => {
          setVisible2(false);
        }}
        bodyStyle={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
      >
        <div>
          <div
            className="px-[5vw] box-border text-[12px] h-[12vw] leading-[12vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            选择歌曲排序
          </div>
          <div className="flex items-center h-[14vw] px-[5vw] box-border">
            <Icon icon="iconoir:page" rotate={2} className="mr-[2vw]" width="6vw" />
            <p className="text-[3.5vw]">默认排序</p>
          </div>
          <div className="flex items-center h-[14vw] px-[5vw] box-border">
            <Icon icon="ooui:bold-a" className="mr-[2vw]" width="6vw" />
            <p className="text-[3.5vw]">按歌曲名排序</p>
          </div>
          <div className="flex items-center h-[14vw] px-[5vw] box-border">
            <Icon icon="icon-park-outline:people-search-one" className="mr-[2vw]" width="6vw" />
            <p className="text-[3.5vw]">按歌手名排序</p>
          </div>
          <div className="flex items-center h-[14vw] px-[5vw] box-border">
            <Icon icon="mingcute:album-line" className="mr-[2vw]" width="6vw" />
            <p className="text-[3.5vw]">按专辑名排序</p>
          </div>
        </div>
      </Popup>
      {/* 弹出层3 */}
      <Popup
        visible={visible3}
        onMaskClick={() => {
          setVisible3(false);
        }}
        bodyStyle={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
      >
        <div className="text-[3.5vw]">
          <div
            className="text-[3vw] px-[5vw] box-border h-[12vw] leading-[12vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            选择举报类型
          </div>
          <div
            className="mx-[5vw] h-[12vw] leading-[12vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            政治反动
          </div>
          <div
            className="mx-[5vw] h-[12vw] leading-[12vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            淫秽色情
          </div>
          <div
            className="mx-[5vw] h-[12vw] leading-[12vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            违法信息
          </div>
          <div
            className="mx-[5vw] h-[12vw] leading-[12vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            恶意攻击谩骂
          </div>
          <div
            className="mx-[5vw] h-[12vw] leading-[12vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            营销广告
          </div>
          <div
            className="mx-[5vw] h-[12vw] leading-[12vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            虚假信息
          </div>
          <div
            className="mx-[5vw] h-[12vw] leading-[12vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            低俗
          </div>
          <div
            className="mx-[5vw] h-[12vw] leading-[12vw]"
            style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}
          >
            其他
          </div>
        </div>
      </Popup>
    </div>
  );
}
