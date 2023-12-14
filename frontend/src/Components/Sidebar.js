import React from 'react';

const Sidebar = () => {
  const handleSearch = () => {
    // Implement search functionality
    console.log('Search button clicked');
  };

  const handleTopicNavigation = (topic) => {
    // Implement topic navigation logic
    console.log(`Navigating to ${topic}`);
  };

  return (
    <div className="sidebar">
      <button onClick={handleSearch}>Search</button>
      <div className="topics">
        <h5>Topics</h5>
        <button onClick={() => handleTopicNavigation('Topic 1')}>Topic 1</button>
        <button onClick={() => handleTopicNavigation('Topic 2')}>Topic 2</button>
        <button onClick={() => handleTopicNavigation('Topic 3')}>Topic 3</button>
        {/* Add more topic buttons as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
