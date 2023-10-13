/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Icon } from '@iconify/react';
import { Button, Modal } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import SidebarNav from './Sidebar';

export default function SideBar2() {
  const navigate = useNavigate();
  return (
    <div className="h-screen overflow-y-auto bg-[#F5F5F5] w-[84vw] box-border">
      <div className="p-[5vw]">
        <div className="flex items-center justify-between h-[10vw] mb-[3vw] w-[100%] box-border">
          <div className="flex items-center">
            <img
              className="w-[6vw] h-[6vw] rounded-[50%]"
              src="http://p2.music.126.net/zr3Pb0_aQRHq3luECcwSKg==/109951167255062082.jpg"
              alt=""
              onTouchStart={() => {
                navigate('/Login');
              }}
            />
            <span
              className="ml-[2vw] text-[#383838] text-[3.5vw]"
              onTouchStart={() => {
                navigate('/Login');
              }}
            >
              立即登录
            </span>
            <Icon className="text-[4vw]" icon="icon-park:right" width="4vw" />
          </div>
          <Icon icon="tabler:scan" width="6vw" />
        </div>
        <div className="mx-auto w-[66vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]">
          <div className="h-[10vw] flex justify-between items-center">
            <div className="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</div>
            <div className="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-solid border-[#9e8f8f] text-[2.5vw] mt-[3vw]">
              会员中心
            </div>
          </div>
          <div
            className="h-[7vw] text-[#9B8B86] text-[2vw]"
            style={{ borderBottom: '1px solid #494443' }}
          >
            点击恢复超21项专属特权
          </div>
          <div className="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]">
            <div className="text-[2vw]">受邀专享,黑胶VIP低至0.27元/天!</div>
          </div>
        </div>
        <SidebarNav />
        <div className="mt-[3vw] w-[100%]">
          <Button
            block
            onClick={() => {
              Modal.show({
                content: '确认退出吗',
                closeOnAction: true,
                actions: [
                  {
                    key: 'online',
                    text: '确定',
                    primary: true,
                    style: { backgroundColor: '#1677ff' },
                    onClick: () => {
                      // Logout();
                      navigate('/Login');
                    },
                  },
                  {
                    key: 'download',
                    None: true,
                    text: '取消',
                  },
                ],
              });
            }}
            className="h-[11.7vw] leading-0 px-[3.6vw] bg-[#fff] w-[76vw] mt-[4vw] rounded-[15px] text-center mx-auto text-[3.6vw] text-[#ef4239]"
          >
            退出登录
          </Button>
        </div>
      </div>
    </div>
  );
}
