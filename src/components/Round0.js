import React from 'react'



export default function Round0() {
    return (

    


        <div className = "flex-container">
        <form className = "Round0">
            <h1>"Round 0": Create an Account</h1>

                <input type = "text" name = "firstName" id="firstName" placeholder = "First Name"/>
                    <br></br>
                    <br></br>
                
                <input type = "text" name = "lastName" id = "lastName" placeholder = "Last Name"/>
                    <br></br>
                    <br></br>
            
                <input type = "email" name = "email" id = "email" placeholder = "Email Address"/>
                    <br></br>
                    <br></br>
                <div className = "DOB">
                    <label>Date of Birth</label>
                            <br></br>    
                        <input type = "text" maxLength = "2" placeholder = "Day (xx)"></input>
                        <t>  /  </t>
                        <input type = "text" maxLength = "2" placeholder = "Month (XX)"></input>
                        <t>  /  </t>
                        <input type = "text" maxLength = "4" placeholder = "Year (XXXX)"></input>
                </div>
                <br></br>
                

            <button className = "signup">Sign Up</button>
        </form>
        </div>
    );
}