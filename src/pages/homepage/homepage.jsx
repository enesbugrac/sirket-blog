
import './homepage.style.css'
import Home2 from '../../components/homepagecomponent/home2/home2.component'
import React from 'react'
import Home1 from '../../components/homepagecomponent/home/home.component'
import PricingCart from '../../components/PricingCart/pricingcart.component'
import Deck from '../../components/WebsiteCart/websitecart.component'
 const Homepage = () => ( 

        <div >
            <Home1/>
            <Deck/>
            <Home2/>
            <PricingCart/>
        </div>
)

export default Homepage;