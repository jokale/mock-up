import { render } from '@testing-library/react'
import React from 'react'
import Footer from './Footer'



class Location extends React.Component {

    render(){
        return(
            <div>

                <h1 id="location">Thee Inkers</h1>

                    <h2 id="location">Where we are: </h2>
                <iframe  id= "map"title="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4965.833892289461!2d-0.1038361!3d51.5147397!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1602696558812!5m2!1sen!2suk" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                <h6 id="location1"> 📍 44 ABC Street <br></br>London  S46 G7H <br></br> +44 020 1234 5678</h6> <br></br>
                <h6 id="location2"> 📍 649 London Avenue <br></br>Glasgow  G13 G57 <br></br> +44 020 9876 5432</h6>

                <Footer/>
            </div>
        )
    }
}


export default Location 