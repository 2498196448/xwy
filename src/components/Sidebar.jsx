/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { Icon } from '@iconify/react';
import { Switch } from 'antd-mobile';
import { nav } from './nav';

export default function sidebarNav() {
  return (
    <>
      {nav.map((item, index) => (
        <div key={index.id} className="bg-[#fff] mt-[3vw] rounded-[4.5vw]">
          {item.title ? (
            <div className="h-[9vw] leading-[9vw] pl-[5vw] text-[2.9vw] text-[#9B8B86] border-[#ccc]">
              {item.title}
            </div>
          ) : null}
          {item?.data.map((items) => (
            <div key={index.id} className="flex items-center justify-between h-[12vw]">
              <div className="flex items-center pl-[5vw]">
                <Icon icon={items.icon} />
                <span className="text-[3.3vw] ml-[3vw]">{items.name}</span>
              </div>
              <div className="mr-[3vw] flex items-center">
                <span className="text-[12px] text-[#b5b5b5] mr-[3vw]">{items?.Leeds}</span>
                {items.name === '深色模式' ? (
                  <Switch
                    defaultChecked={false}
                    onChange={() => {
                      console.log('111');
                    }}
                    style={{
                      '--checked-color': '#666',
                      '--height': '6vw',
                      '--width': '10vw',
                    }}
                  />
                ) : (
                  <Icon
                    icon="teenyicons:right-outline"
                    color="#8a8a8a"
                    className="w-[3vw] mr-[2vw]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
