import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from './firebaseConfig';
import {addDoc, doc, getDoc } from 'firebase/firestore';
import Navbar from './Components/Navbar';
import './Styles/forum.css';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const name="Madhu B";

  const [textValue, setTextValue] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

 
  const fetchCurrentUser = async () => {
      try {
          const user = auth.currentUser;

          if (user) {
              const userDocRef = doc(db, 'Users', user.uid);
              const userDoc = await getDoc(userDocRef);

              if (userDoc.exists()) {
                  setCurrentUser({
                      uid: user.uid,
                      name: userDoc.data().Firstname
                  });
              }
          } else {
              const unsubscribe = auth.onAuthStateChanged((user) => {
                  if (user) {
                      fetchCurrentUser(); 
                  }
                  unsubscribe();
              });
          }
      } catch (error) {
          console.error('Error fetching current user:', error.message);
      }
  };

  useEffect(() => {
      fetchCurrentUser();
  }, []);

  const handleTextAreaChange = (e) => {
      setTextValue(e.target.value);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const PostsCollectionRef = collection(db, 'Posts');
          if (!currentUser) {
              console.error('Current user is null. Unable to submit post.');
              return;
          }
          const userDocRef = doc(db, 'Users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (!userDoc.exists()) {
              console.error('User document not found.');
              return;
          }

          const postData = {
              content: textValue,
              userID: currentUser.uid,
              FirstName: userDoc.data().Firstname
          };

          await addDoc(PostsCollectionRef, postData);

          console.log('Text submitted and saved to Posts collection:', textValue);
          setTextValue('');
      } catch (error) {
          console.error('Error saving text to Posts collection:', error.message);
      }
  };


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



  function getInitials(name) {
    return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
  }

  function generateBackground(name) {
    let hash = 0;
    let i;
 
   for (i = 0; i < name.length; i += 1) {
     hash = name.charCodeAt(i) + ((hash << 5) - hash);
   } 
   let color = '#';
   for (i = 0; i < 3; i += 1) {
     const value = (hash >> (i * 8)) & 0xff;
     color += `00${value.toString(16)}`.slice(-2);
   }
 
   return color;
 }

 let initials = getInitials(name);
let color = generateBackground(name);
const customStyle =
{
 display: "flex",
 height: "50px",
 width: "50px",
 borderRadius: "100px",
 color: "white",
 background: color,
 margin: "auto"
}

  return (
    <div >
    <Navbar />
    <div className="create-post">
        <h2>Create a Post</h2>
        <form onSubmit={handleSubmit} className="post-form">
  {/* <div className="box">
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={newPost.title}
      onChange={handleInputChange}
      className="input-field"
    />
  </div> */}
  <div className="box">
    <textarea
      name="content"
      placeholder="Content"
      value={textValue}
      onChange={handleTextAreaChange}
      className="input-field"
    ></textarea>
    <button type="submit" className='btn btn-primary rounded-pill py-sm-2 px-sm-3 me-2 animated slideInLeft'>Create Post</button>
  </div>
</form>
      </div>
      <div className='post'>
      <h2>Posts </h2>
      
      <div className="posts-container">
        {posts.map((post, index) => (
          <div key={index} className="post-item">
            <div className="avatar">
              <div style={customStyle}>
                <span>{initials}</span>
              </div>
            </div>
            <div className="name-content">
              <div className="name">
                <p>{post.FirstName}</p>
              </div>
              <div className="content">
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Forum;
  