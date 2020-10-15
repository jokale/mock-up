import { render } from '@testing-library/react'
import React from 'react'



class Location extends React.Component {

    render(){
        return(
            <div>
                    <h2 id="location">Where we are: </h2>
                <iframe  id= "map"title="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4965.833892289461!2d-0.1038361!3d51.5147397!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1602696558812!5m2!1sen!2suk" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            </div>
        )
    }
}


export default Location 