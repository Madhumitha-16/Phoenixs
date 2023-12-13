import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from './firebaseConfig';

const PostForm = ({ onPostSubmit }) => {
  const [textValue, setTextValue] = useState('');
  const [file, setFile] = useState(null);
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
            name: userDoc.data().Firstname,
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

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const PostsCollectionRef = collection(db, 'Posts');
      if (!currentUser) {
        console.error('Current user is null. Unable to submit post.');
        return;
      }

      // Upload file to Firebase Storage
      let fileURL = null;
      if (file) {
        const storageRef = ref(storage, `postFiles/${file.name}`);
        await uploadBytes(storageRef, file);
        fileURL = await getDownloadURL(storageRef);
      }

      // Fetch user document
      const userDocRef = doc(db, 'Users', currentUser.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        console.error('User document not found.');
        return;
      }

      // Save post data in Firestore
      const postData = {
        content: textValue,
        userID: currentUser.uid,
        FirstName: userDoc.data().Firstname,
        fileURL: fileURL || null, // Ensure fileURL is not null
      };

      await addDoc(PostsCollectionRef, postData);

      console.log('Text and file submitted and saved to Posts collection:', textValue, fileURL);
      setTextValue('');
      setFile(null);
    } catch (error) {
      console.error('Error saving text and file to Posts collection:', error.message);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <br/>
        <label>
          Enter Text:<br></br>
          <textarea value={textValue} onChange={handleTextAreaChange} rows="4" cols="50" />
        </label>
        <br />
        <label>
          Upload File:<br />
          <input type="file" accept="image,video/mkv/*" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
