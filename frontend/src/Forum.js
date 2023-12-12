import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Forum = () => {
  const [posts, setPosts] = useState([]);

  // Function to retrieve all documents from the StudentsPosts collection
  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Posts'));
      const postsData = [];
      querySnapshot.forEach((doc) => {
        postsData.push(doc.data());
      });
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log('All Posts:', posts);
  }, [posts]);

  return (
    <div>
      <h2>Posts </h2>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.FirstName}</p>
          <p>{post.content}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Forum;
  