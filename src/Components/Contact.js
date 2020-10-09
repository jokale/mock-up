import React from 'react'


class Contact extends React.Component {

    render(){
        return(
            <div>
                <h1 id='contact'>Thee Inkers</h1>
                <h2 >Contact Us</h2>
                <center>
                <form>
                    <br></br><label>Name</label> <br></br>
                    <br></br><input></input> <br></br>
                    <br></br><label>Email</label> <br></br>
                    <br></br> <input></input><br></br>
                    <br></br><label>Message</label><br></br>
                    <textarea id="idea" name="w3review" placeholder='What is your idea?'rows="4" cols="50"/> <br></br>

                    <button type="submit">Submit</button><br></br>
                </form></center>
            </div>
        )
    }
}

export default Contact 