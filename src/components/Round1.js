import React from 'react'



export default function Round1() {
    return (
        <form className = "Round1">
            <h1>Round 1: Get To Know The Chef</h1>
            
            <label for="q1.1">Why do you want to own your own restaurant?
                <br></br>
                <textarea></textarea>
                <br></br>
            </label>
            

            <label>Are you willing to relocate to win a $1,000,000 turn-key restaurant?
                <br></br>
                <select className = "winRestaurant">
                    <option value = "yes">Yes</option>
                    <option value = "no">No</option>
                </select>
            </label>
                <br></br>
            
            <label for="q1.3">If you could own your own restaurant, what kind of food would you serve?
                <br></br>
                <textarea for="q1.3"></textarea>
                <br></br>
            </label>

                    

            <label for="q1.3">How long have you been in the restaurant industry (years)?</label>
                <input type = "number" id = "q1.3"/>
                    <br></br>
        </form>
    );
}
