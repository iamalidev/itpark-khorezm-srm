import React from "react";
import Search from "antd/es/input/Search";

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = () => {
  return (
    <div className="header">
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </div>
  );
};

export default Header;
