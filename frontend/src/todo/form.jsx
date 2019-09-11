import React from 'react'
import Grid from '../template/grid'
import Icon from '../template/iconButton'
export default props => (
    <div role='form' className='form'>
        <Grid cols='12 9 10'>
            <input id='cpf' className='form-control' placeholder='digite seu CPF...' onChange={props.handleChange} value={props.cpf}/>
        </Grid>
        <Grid cols='12 3 2'>
            <Icon style='primary' icon='plus' hide={true} onClick={props.handleAdd}></Icon>
        </Grid>
    </div>
)