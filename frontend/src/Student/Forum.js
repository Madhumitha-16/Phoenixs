import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Forum = () => {
  const [posts, setPosts] = useState([]);

  // Function to retrieve all documents from the StudentsPosts collection
  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'StudentsPosts'));
      const postsData = [];
      querySnapshot.forEach((doc) => {
        postsData.push(doc.data());
      });
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error.message);
    }
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Log posts in the console
  useEffect(() => {
    console.log('All Posts:', posts);
  }, [posts]);

  return (
    <div>
      <h2>Posts </h2>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.content}</p>
          {/* Add rendering for other fields if needed */}
        </div>
      ))}
    </div>
  );
};

export default Forum;
