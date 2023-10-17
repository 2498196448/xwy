import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { Icon } from '@iconify/react';
import { playlistDetail } from '../../views/Data';

export default function SongCover() {
  const location = useLocation();
  const [data, setData] = useState();
  useEffect(() => {
    playlistDetail(location.pathname.split('/')[2]).then((res) => {
      setData(res.data.playlist);
      console.log(res.data.playlist);
    });
  }, []);
  return (
    <div className="bg-[]">
      <div>111</div>
    </div>
  );
}
