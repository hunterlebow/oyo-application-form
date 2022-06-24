import React from 'react'

export default function Round2() {
    return (
        <form className = "Round2">
            <h1>Round 2: Wahoo! You made it to the next round...</h1>
            <h2>Let's start developing your dream restaurant!</h2>
            
            
            <label>Name 3 dishes you would love to serve at your restaurant?</label>
                        <br></br>
                        <br></br>
                    <input type = "text" id = "q2.1" name = "dish1" placeholder = "Dish One"/>
                        <br></br>
                        <br></br>
                    <input type = "text" id = "q2.1" name = "dish2" placeholder = "Dish Two"/>
                        <br></br>
                        <br></br>
                    <input type = "text" id = "q2.1" name = "dish3" placeholder = "Dish Three"/>
                        <br></br>
                        <br></br>

            <label>What makes these dishes special? (i.e. is it a family recipe, a local dish you learned, etc...)</label>
                    <br></br>
                <textarea></textarea>
                    <br></br>
            
            <label for="q2.3">The best restaurants have an amazing dining experience. What will make yours special? 😝</label>
                    <br></br>
                <textarea></textarea>
                    <br></br>

            <label for="q2.3">Tell us about your worst dining experience?
                How did you feel as a customer?
                What would you do differently as an owner?
            </label>
         
                <textarea name = "q2.3"></textarea>
                    <br></br>
        </form>
    );
}
