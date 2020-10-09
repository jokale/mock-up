import React from 'react'


class Contact extends React.Component {

    render(){
        return(
            <div>
                <h2>Contact Us</h2>
                <center>
                <form>
                    <label>Name</label> <br></br>
                    <input></input> <br></br>
                    <label>Email</label> <br></br>
                    <input></input><br></br>
                    <label>Message</label><br></br>
                    <input type="text-area"></input><br></br>
                    <button type="submit">Submit</button><br></br>
                </form></center>
            </div>
        )
    }
}

export default Contact 