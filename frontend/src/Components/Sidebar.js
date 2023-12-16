import React from 'react';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


const Sidebar = () => {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );
  const handleSearch = () => {
    console.log('Search button clicked');
  };

  const handleTopicNavigation = (topic) => {
    console.log(`Navigating to ${topic}`);
  };

  return (
    <div className="sidebar">
    
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
    />
      <div style={{display:"flex", flexDirection:"column"}}>
        <h5>Topics</h5>
        <button onClick={() => handleTopicNavigation('Topic 1')}>Study Materials</button>
        <button onClick={() => handleTopicNavigation('Topic 2')}>Schools</button>
        <button onClick={() => handleTopicNavigation('Topic 3')}>Schemes</button>
        <button onClick={() => handleTopicNavigation('Topic 3')}>Rally</button>
        <button onClick={() => handleTopicNavigation('Topic 3')}>Classes and Webinars</button>


        {/* Add more topic buttons as needed */}
      </div>
   

    </div>
  );
};

export default Sidebar;
