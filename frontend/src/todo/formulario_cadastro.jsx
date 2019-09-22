import React from 'react'
import Grid from '../template/grid'
import Icon from '../template/iconButton'
import Form from './form'
export default props => (
    <div>
        <Form value={props.state.cpf}
            id='cpf'
            col = '6 3'
            placeholder='CPF ...'
            onChage={props.onChage}/>
        <Form value={props.state.nome}
            id='nome'
            col = '6 3'
            placeholder='nome completo ...'
            onChage={props.onChage}/>
        <Form value={props.state.telefone}
            id='telefone'
            col = '6 3'
            placeholder='Telefone ...'
            onChage={props.onChage}/>
        <Grid cols='6 3'>
            <Icon style='primary' icon='plus' hide={true} onClick={props.onClick}></Icon>
        </Grid>
    </div>
)