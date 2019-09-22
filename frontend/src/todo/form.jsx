import React from 'react'
import Grid from '../template/grid'
export default props => (
    <div role='form' className='form'>
        <Grid cols={props.col}>
            <input id={props.id} className='form-control' placeholder={props.placeholder} onChange={props.handleChange} value={props.value}/>
        </Grid>
    </div>
)