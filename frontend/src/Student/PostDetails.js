import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';

const PostForm = ({ onPostSubmit }) => {
    const [textValue, setTextValue] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    // Function to fetch current user information
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
                // If user is not available yet, wait for the authentication state to change
                const unsubscribe = auth.onAuthStateChanged((user) => {
                    if (user) {
                        fetchCurrentUser(); // Retry fetching user once the authentication state changes
                    }
                    unsubscribe(); // Unsubscribe to avoid repeated calls
                });
            }
        } catch (error) {
            console.error('Error fetching current user:', error.message);
        }
    };

    // Fetch current user when the component mounts
    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const handleTextAreaChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const studentsPostsCollectionRef = collection(db, 'StudentsPosts');
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

            await addDoc(studentsPostsCollectionRef, postData);

            console.log('Text submitted and saved to StudentsPosts collection:', textValue);
            setTextValue('');
        } catch (error) {
            console.error('Error saving text to StudentsPosts collection:', error.message);
        }
    };


    return (
        <div>
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Text:
                    <textarea
                        value={textValue}
                        onChange={handleTextAreaChange}
                        rows="4"
                        cols="50"
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostForm;
