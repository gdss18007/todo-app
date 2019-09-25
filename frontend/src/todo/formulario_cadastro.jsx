import React from 'react'
import Grid from '../template/grid'
import Icon from '../template/iconButton'
import Form from './form'
export default props => (
    <div>
        <Form value={props.state.nome}
            id='nome'
            tipo='text'
            col = '6 3'
            handle='1'
            placeholder='nome completo ...'
            onChange={props.onChange}/>
            <Form value={props.state.telefone}
            id='telefone'
            handle='2'
            tipo='text'
            col = '6 3'
            placeholder='Telefone ...'
            onChange={props.onChange}/>
        <Form value={props.state.cpf}
            id='CPF'
            handle='0'
            tipo='text'
            col = '6 3'
            placeholder='CPF ...'
            onChange={props.onChange}/>
        <Grid cols='6 3'>
            <Icon style='primary' icon='plus' hide={true} onClick={props.onClick}></Icon>
        </Grid>
    </div>
)