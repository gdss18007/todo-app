import React from 'react'
import Grid from './grid'
export default props => (
    <div role='form' className='form'>
        <Grid cols={props.col}>
            <input type = 'text' id={props.id} className='form-control' placeholder={props.placeholder} onChange={props.change} defaultValue={props.value} disabled/>
        </Grid>
    </div>
)