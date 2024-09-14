// import { Phone } from "@mui/icons-material"
// import { useState } from "react"


// import React, { useState } from "react";
function Profile() {
//     const[user, setUser] =useState(null)
   
// const sendOtp=()=>{
//     const recaptcha=new recaptchaVerifier(auth,"recaptcha",{})
// const confirmation=signInWithPhoneNumber(auth,Phone,recaptcha)
// setUser(confirmation)

// }


    const handleconbtn = (event) => {
        console.log("clicked on continue btn")
        event.currentTarget.disabled = true;
    }

   

    const divStyle = {
        color: "black",
    }
    return (<>
        <div className="loginbig" style={divStyle}>
            <div className="loginsmall">
                 <span className="loginhead">Login</span>  or  <span className="loginhead" >Signup</span> <br></br>
                <div>
                    <br></br>
                    <label htmlFor="name2"></label>
                    <input className="input" type="number"placeholder="Mobile Number" id="name2" />
                    <br></br>  <br></br>

                     <p className="blackText">By continuing I agree to the 
                      <span className="text" > Terms of Use</span > 
                        &  <span className="text">Privacy policy</span> </p>

                    <button className="button" onClick={handleconbtn}> CONTINUE</button> 
                    <br></br> <br></br>

                    <div>
                    <input className="input" type="number"placeholder="Enter Otp" id="name2" />
                    </div>
                    <p className="blackText">Have trouble logging in? <span className="text" > Get help</span >  </p>  

                   
   
                </div>
            </div>
        </div>
    </>
    )

}
export default Profile;


