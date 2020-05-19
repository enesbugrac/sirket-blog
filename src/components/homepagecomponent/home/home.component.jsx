import React from 'react'
import Grid from '@material-ui/core/Grid';
import img from '../../../assets/img/hero/hero_right.png'
import './home.styles.css'
const Home1 = () => (
    <div>
    <Grid container >
    <Grid container lg={6} xs={12} alignItems="center">
        <Grid item class="deneme">
            <span   class="" >App Landing Page</span>
            <h1   class="deneme2" >Get things done<br/>with Appco</h1>
            <p   class="" >Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.</p>
       
            <div class="slider-btns">
           
                <a  href="industries.html" class="btn radius-btn"  >Download</a>
            
                <a   class="popup-video video-btn ani-btn" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"  ><i class="fas fa-play"></i></a>
            </div>
        </Grid>
    </Grid>
    <Grid item lg={6} xs={12}>
        <div class="hero__img d-none d-lg-block f-right"  >
            <img src={img} alt=""/>
        </div>
    </Grid>
</Grid>
    </div>
)
export default Home1;