import React from 'react'
// import { hydrate } from 'react-dom'
import Footer from './Footer'
// import Email from './Email.png'
import Mail from './Mail.png'


class Contact extends React.Component {

    render(){
        return(
            <div>
                <h1 id='contact'>Thee Inkers</h1>
                <h2 id="contact">Contact Us</h2>
                <center>
                    <br></br><br></br>

                    <img  id="mail"src={Mail}/>
                <form id="form">
                    <br></br>
                    
                    <h4 id="tag1"><label>Name</label></h4><br></br>
                    <br></br><input size ='70' placeholder='Name?'></input> <br></br>
                    <br></br><h4 id="tag2"><label>Email</label></h4> <br></br>
                    <br></br> <input size ='70' placeholder='Email?'></input><br></br>
                    <br></br><h4 id="tag3"><label>Message</label></h4><br></br>
                    <textarea id="idea" size='70'rows="7" cols="70" placeholder='What is your idea?'/> <br></br>
                    <br></br><button type="submit">Submit</button><br></br>
                </form>


                </center>
                <Footer/>
            </div>
        )
    }
}

export default Contact 