import React from 'react'


class Contact extends React.Component {

    render(){
        return(
            <div>
                <h1 id='contact'>Thee Inkers</h1>
                <h2 >Contact Us</h2>
                <center>
                    <br></br><br></br>
                <form>
                    <br></br>
                    
                    <h4 id="tag1"><label>Name</label></h4><br></br>
                    <br></br><input size ='70' placeholder='Name?'></input> <br></br>
                    <br></br><h4 id="tag2"><label>Email</label></h4> <br></br>
                    <br></br> <input size ='70' placeholder='Email?'></input><br></br>
                    <br></br><h4 id="tag3"><label>Message</label></h4><br></br>
                    <textarea id="idea" size='70' placeholder='What is your idea?'/> <br></br>
                    <button type="submit">Submit</button><br></br>
                </form>
                
                <iframe  id= "map"title="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4965.833892289461!2d-0.1038361!3d51.5147397!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1602696558812!5m2!1sen!2suk" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                
                </center>
            </div>
        )
    }
}

export default Contact 