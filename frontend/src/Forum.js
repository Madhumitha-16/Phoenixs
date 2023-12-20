import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth, storage } from "./firebaseConfig";
import { addDoc, doc, getDoc } from "firebase/firestore";
import Navbar from "./Components/Navbar";
import "./Styles/forum.css";
import Sidebar from "./Components/Sidebar";
import VoiceControl from "./Components/VoiceControl";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import StudentNavbar from "./Components/StudentNavbar";
import PostForm from "./PostDetails";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const name = "Madhu B";
  const [file, setFile] = useState(null);
  const [textValue, setTextValue] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const fetchCurrentUser = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        const userDocRef = doc(db, "Users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setCurrentUser({
            uid: user.uid,
            Firstname: userDoc.data().Firstname,
            Lastname: userDoc.data().Lastname,
            Role: userDoc.data().Role
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
      console.error("Error fetching current user:", error.message);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const handleTextAreaChange = (e) => {
    setTextValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit",e.target.value);
    try {
      const PostsCollectionRef = collection(db, "Posts");
      if (!currentUser) {
        console.error("Current user is null. Unable to submit post.");
        return;
      }
      let fileURL = null;
      if (file) {
        const storageRef = ref(storage, `postFiles/${file.name}`);
        await uploadBytes(storageRef, file);
        fileURL = await getDownloadURL(storageRef);
      }
      const userDocRef = doc(db, "Users", currentUser.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        console.error("User document not found.");
        return;
      }

      const postData = {
        content: textValue,
        userID: currentUser.uid,
        Firstname: userDoc.data().Firstname,
        Lastname: userDoc.data().Lastname,
        Role: userDoc.data().Role,
        fileURL: fileURL || null,
      };

      await addDoc(PostsCollectionRef, postData);

      console.log("Text submitted and saved to Posts collection:", textValue);
      setTextValue("");
      setFile(null);
    } catch (error) {
      console.error("Error saving text to Posts collection:", error.message);
    }
  };

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Posts"));
      const postsData = [];
      querySnapshot.forEach((doc) => {
        postsData.push(doc.data());
      });
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log("All Posts:", posts);
  }, [posts]);

  function getInitials(name) {
    // console.log(name);
    return `${name?.split(" ")[0][0]}${name?.split(" ")[1][0]}`;
  }

  function generateBackground(name) {
    let hash = 0;
    let i;

    for (i = 0; i < name.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  let color = generateBackground(name);
  const customStyle = {
    display: "flex",
    height: "50px",
    width: "50px",
    borderRadius: "100px",
    color: "white",
    background: color,
    margin: "auto",
  };

  return (
    <div>
      <StudentNavbar />
      <VoiceControl />
      <div className="main-container">
      <hr></hr>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <div className="create-post">
            <h2 style={{ fontSize: "40px" }}>Create a Post</h2>
            <form onSubmit={handleSubmit} >
              <div className="box">
                <div className="col-sm">
                  <textarea
                    name="content"
                    placeholder="Content"
                    value={textValue}
                    onChange={handleTextAreaChange}
                    className="input-field"
                  ></textarea>
                </div>
                <div>
                  <br />
                </div>
                <div>
                  <input
                    className="file-upload"
                    type="file"
                    accept="image,video/mkv/*"
                    placeholder="Upload File"
                    onChange={handleFileChange}
                    style={{
                      border: "2px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                      color: "blue",
                      background: "lightgray",
                    }}
                  />
                  <span style={{ color: "blue" , fontsize:"10px",}}>📁</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="submit"
                className="btn btn-primary rounded-pill py-sm-2 px-sm-3 me-2 animated slideInLeft"
              >
              
                Create Post
              </button>
            </div>
            </form>

            
          </div>
          <div className="post">
            <h2>Posts </h2>
            <div className="posts-container">
              {posts.map((post, index) => (
                <div key={index}>
                  <div className="post-item">
                    <div className="avatar">
                      <div
                        // style={{
                        //   display: "flex",
                        //   height: "50px",
                        //   width: "50px",
                        //   borderRadius: "100px",
                        //   color: "white",
                        //   background: generateBackground(post?.FirstName),
                        //   margin: "auto",
                        // }}
                      >
                        <span>
                          {getInitials(`${post.Firstname} ${post.Lastname}`)}
                        </span>
                      </div>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h5>{post.Firstname}</h5>
                     
                  <p>{post.Role}</p>
                    </div>
                  </div>

                  <div className="content">
                    <p>{post.content}</p>
                    <img src={post.fileURL} alt="" width={"100%"} />
                  </div>
                </div>
              ))}
                
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
};

export default Forum;
