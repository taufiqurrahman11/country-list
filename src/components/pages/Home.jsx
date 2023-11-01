import React, { useState } from 'react';
import TopBar from '../Topbar';
import Card from '../Card';
import Navbar from '../Navbar';

const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [themeLight, setThemeLight] = useState(true)

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const toggleTheme = () => {
    setThemeLight((prevTheme) => !prevTheme);
  };

  return (
    <div>
      <Navbar themeLight={themeLight} onClickTheme={toggleTheme}/>
      <TopBar onSearch={handleSearch} />
      <Card searchKeyword={searchKeyword} />
    </div>
  );
};

export default Home;
