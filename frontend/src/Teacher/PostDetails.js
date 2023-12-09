import React, { useState ,useRef, useEffect} from 'react'
// import './Styles/phase1.css';
// import {db} from "../firebaseConfig"
// import {addDoc,collection} from "@firebase/firestore";
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
// import phase1 from '../Assets/Images/phase_1.png';

function PostDetails() {
  const userId = useParams();
  const navigate = useNavigate();
  const [project_title, setproject_title] = useState("");
  const [abstract,setabstact ] = useState("");
  const [domain,setdomain ] = useState("");
  const [docId,setDocId]= useState();
  const notify = () => toast.success('Submitted Successfully');
  const err = () => toast.error('Submission Failed!');
  const handlesetdomain=(e)=>
  {
    setdomain(e.target.value);
  }

  // const ref=collection(db,"PhaseI"); 

  const prjtitle=useRef();
  const abs=useRef();
  const dom=useRef();

  useEffect(() => {
    if (docId) { 
      notify();
    }
  }, [docId]);

  const prjdet=async(e)=>
{
e.preventDefault();
console.log(prjtitle.current.value);
console.log(abs.current.value);

let data={
    Project_Title:prjtitle.current.value,
    Abstract:abs.current.value,
    Domain:dom.current.value,    
    userid:userId.userId
}
   
// try
// {
//     // addDoc(ref,data);
//     const docRef=await addDoc(collection(db,"PhaseI"),data);
//     console.log("Document written with ID:",docRef.id);
//     setDocId(docRef.id)
// }
// catch(e)
// {
//     console.log(e);
//     err();
// }

// }


  return (
   
<div className="bodyWrap dashboardPage twoColumnLayout">
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: 'green',
              secondary: 'white',
            },
          },
        }}
      />
      <div className="contentLoginWrap formColumn">
        <div className="heading">
          <h2>Phase-I</h2>
          <hr></hr>
        </div>
        <form className="loginForm" 
        // onSubmit={prjdet}
        >

          <div className="phaseSide">
            <h4>Project Details</h4>
            <div className="loginWrap">
              <div className="input-group">
                <input
                  type="text"
                  className="input"
                  // onChange={(e) => setproject_title(e.target.value)}
                  // ref={prjtitle}
                  required
                />
                <label
                  className={`${
                    project_title.length > 0 ? 'focusLabel' : ''
                  }`}
                >
                  Project Title<span className="asterisk"> * </span>
                </label>
              </div>

              <div className="input-group">
                <label>Domain</label>
                <select
                  className="select"
                  id="dropdown"
                  ref={dom}
                  value={domain}
                  // onChange={handlesetdomain}
                >
                  <option value="IoT">IoT</option>
                  <option value="IoT with AI">IoT with AI</option>
                  <option value="IoT with Cloud">IoT with Cloud</option>
                  <option value="IoT with AR/VR">IoT with AR/VR</option>
                </select>
              </div>
              <div className="input-group">
                <textarea
                  name="abstract"
                  cols="65"
                  rows="10"
                  onChange={(e) => setabstact(e.target.value)}
                  ref={abs}
                  required
                ></textarea>
                <label>
                  Abstract<span className="asterisk"> * </span>
                </label>
              </div>
              <input type="submit" value="Submit" className="button" />
            </div>
          </div>
        </form>
      </div>
      {/* Separate div for the image */}
      <div className="imageContainer">
        <img
      //  src={phase1} 
       width={"80%"} height={"80%"}
        />
      </div>
      
    </div>
    
  );
}
}

export default PostDetails