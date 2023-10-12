import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const Navigate = useNavigate();
  return (
    <div className="page h-[100vh] bg-[rgb(253,251,252)]">
      <div className="nav h-[16vw] flex items-center px-[5.5vw] box-border justify-between">
        <Icon
          icon="fluent:ios-arrow-24-filled"
          className="h-[22.5px]"
          onClick={() => {
            Navigate('/HomePage');
          }}
        />
        <p className="text-[4vw] text-[#696969]">游客登录</p>
      </div>
      <img
        src="https://admirable-jalebi-ce44af.netlify.app/static/logo.fill.svg"
        alt=""
        className="w-[38vw] mx-[auto] mt-[7vw] mb-[9vw] block"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQA…Oa13ksNZFDmtd5LDWRf4Pli/Gcw7sKH8AAAAASUVORK5CYII="
        alt=""
        className="mx-[auto] w-[40vw] h-[40vw] block"
      />
      <p className="text-[12px] mt-[10vw] text-center">
        使用<span className="mx-[1.5vw] text-[#2c6aa1]">网易云音乐App</span>扫码登录
      </p>
      <img
        src="https://admirable-jalebi-ce44af.netlify.app/static/bg-login.png"
        alt=""
        className="fixed bottom-0 left-0 right-0 w-[100%] block"
      />
    </div>
  );
}
