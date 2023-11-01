import React, {useState} from 'react';
import Navbar from './Navbar.jsx';
import styleTopBar from '../style/topbar.module.scss';

const TopBar = ({onSearch}) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  console.log(searchKeyword)

  const handleSearch = () => {
    onSearch(searchKeyword);
  }

  return (
    <div className={styleTopBar.containerAll}>
        {/* <Navbar /> */}
        <div className={styleTopBar.topbar}>
            <div className={styleTopBar.container}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                
                <select name="Region" id="region">
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="America">America</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    </div>
  );
};

export default TopBar;