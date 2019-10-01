import React from 'react'
import Grid from './grid'
export default props => (
    <div role='form' className='form'>
        <Grid cols={props.col}>
            <input type = {props.tipo} id={props.id} className='form-control' placeholder={props.placeholder} onChange={props.change} defaultValue={props.value}/>
        </Grid>
    </div>
)