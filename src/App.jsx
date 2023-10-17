/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default-member
import HomePage from './views/HomePage';
// eslint-disable-next-line import/no-named-as-default-member
import RankingList from './views/RankingList';
import Search from './views/Search';
// eslint-disable-next-line import/no-named-as-default-member
import Playlist from './views/Playlist';
import Login from './components/Login';
import PlaySong from './components/PlaySong';
import MvPlay from './components/mvPlay/MvPlay';
import NavBottom from './components/NavBottom/NavBottom';
import SongCover from './components/playList/SongCover';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/HomePage" />} />
      <Route
        path="/HomePage"
        element={
          <>
            <HomePage />
            <NavBottom />
          </>
        }
      />
      <Route
        path="/RankingList"
        element={
          <>
            <RankingList />
            <NavBottom />
          </>
        }
      />
      <Route path="/Search" element={<Search />} />
      <Route path="/Playlist/:id" element={<Playlist />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/PlaySong/:id" element={<PlaySong />} />
      <Route path="/MvPlay/:id" element={<MvPlay />} />
      <Route path="/SongCover/:id" element={<SongCover />} />
    </Routes>
  );
}
