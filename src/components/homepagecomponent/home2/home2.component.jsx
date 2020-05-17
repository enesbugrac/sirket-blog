import React from 'react';
import './home2.styles.css'
import img from '../../../assets/img/shape/best-features.png'
import Grid from '@material-ui/core/Grid';
const Home2 = () => (
   
            <Grid container className = 'home2'>
                <Grid item lg={6} xs={0} >
                    <img src={img} alt=""/>
                </Grid>
                <Grid container lg={6} xs={12} className='yazilar'>
                    
                        <div class="row">
                                <div class="section-tittle">
                                    <h2>Some of the best features Of Our App!</h2>
                                </div>
                            
                        </div>

                        <div class="row">
                            <Grid container lg={6} xs={6} className='item-bottom'>
                                
                                    <Grid item lg={3} xs={3} >
                                        <span class="flaticon-support"></span>
                                    </Grid>
                                    <Grid item lg={9} xs={9}>
                                        <h3>Easy to Costomize</h3>
                                        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                    </Grid>
                                
                            </Grid>
                            <Grid container lg={6} xs={6}className='item-bottom'>
                                
                                    <Grid item lg={3} xs={3} >
                                        <span class="flaticon-support"></span>
                                    </Grid>
                                    <Grid item lg={9} xs={9}>
                                        <h3>Extreme Security</h3>
                                        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                    </Grid>
                                
                            </Grid> 
                            <Grid container lg={6} xs={6}className='item-bottom'>
                                
                                    <Grid item lg={3} xs={3}>
                                        <span class="flaticon-support"></span>
                                    </Grid>
                                    <Grid item lg={9} xs={9}>
                                        <h3>Customer Support</h3>
                                        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                    </Grid>
                                
                            </Grid>
                            <Grid container lg={6} xs={6}className='item-bottom'>
                                
                                    <Grid item lg={3} xs={3}>
                                        <span class="flaticon-support"></span>
                                    </Grid>
                                    <Grid item lg={9} xs={9}>
                                        <h3>Creative Design</h3>
                                        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                    </Grid>
                                
                            </Grid>
                             
                        </div>
                    
                </Grid>
            </Grid>
        
)
export default Home2;