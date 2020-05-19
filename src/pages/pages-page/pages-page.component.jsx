import React from "react";
import PagesCart from "../../components/PagesCard/pages-card.component";
import './pages-page.styles.css'
import Grid from '@material-ui/core/Grid'

import "./pages-page.styles.css";


const PagesPage = () => (
    <Grid container className='pagespage'>
        <Grid item className = 'cartlar' lg={6}> 
        <PagesCart/>
        </Grid>
        <Grid item className = 'cartlar' lg={6}> 
        <PagesCart/>
        </Grid>
        <Grid item className = 'cartlar' lg={6}> 
        <PagesCart/>
        </Grid>
        <Grid item className = 'cartlar' lg={6}> 
        <PagesCart/>
        </Grid>
        </Grid>

)


export default PagesPage;