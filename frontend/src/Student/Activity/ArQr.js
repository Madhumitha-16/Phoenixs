import React from "react";
import StudentNavbar from "../../Components/StudentNavbar";
import Footer from "../../Components/Footer";
import ArQrImg from "../../img/ArAppQrImg.jpeg"
import ArSamp1 from "../../img/ArSample1.png"
import ArSamp2 from "../../img/ArSample2.jpeg"
import "../../Styles/Home.css"; // Import home.css from styles folder
export default function ArQr() {
    return (
        <div>
            <StudentNavbar />
            <h2 style={{ fontSize: '250%', textAlign: "center", color: "var(--primary)" }}>Augmented reality - <span style={{color:"#000"}}>In Your Hands!</span></h2>
            <div style={{ display: "flex" }}>
                {/*<img className="ArSamp1" src={ArSamp1} alt="ArSamp1" style={{ width:"20%", objectFit: "cover" }} /> */}
                <img className="ArQrImg" src={ArQrImg} alt="ArQrImg" style={{ display: "block", margin: "0 auto" }} />
               {/* <img className="ArSamp2" src={ArSamp2} alt="ArSamp2" style={{ width:"20%", objectFit: "cover" }} /> */}
            </div>
            <h2 style={{ fontSize: '250%', textAlign: "center", color: "var(--primary-color)" }}>Scan here to Explore!</h2>
            <Footer />
        </div>
    )
}