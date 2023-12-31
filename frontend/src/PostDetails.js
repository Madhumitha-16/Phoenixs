import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from './firebaseConfig';
import '../src/Styles/forum.css';

const PostForm = ({ }) => {
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
            Firstname: userDoc.data().Firstname,
            Lastname: userDoc.data().Lastname,
            Role: userDoc.data().Role,

          });
          console.log('Fetched User Data:', userDoc.data());
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
        Firstname: userDoc.data().Firstname,
        Lastname: userDoc.data().Lastname,
        Role: userDoc.data().Role,
        fileURL: fileURL || null,
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
      <form onSubmit={handleSubmit}>
        <br/>
        <div className="box">
                <div className="col-sm">
        <label>
          Enter Text:<br></br>
          <textarea value={textValue} onChange={handleTextAreaChange} rows="4" cols="50" />
        </label>
        <br />
        </div>
        <label>
          Upload File:<br />
          <input type="file" accept="image,video/mkv/*" onChange={handleFileChange} />
        </label>
        <br />
        </div>
        <button type="submit" className="btn btn-primary rounded-pill py-sm-2 px-sm-3 me-2 animated slideInLeft"
>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
