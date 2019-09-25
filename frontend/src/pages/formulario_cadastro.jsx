import React from 'react'
import Grid from '../template/grid'
import Icon from '../template/iconButton'
import Form from '../template/form'
export default props => (
    <div>
        <Form value={props.state.cpf}
            id='CPF'
            handle='0'
            tipo='false'
            col = '8 4'
            onChange={props.onChange}/>
        <Form value={props.state.nome}
            id='Nome'
            handle='0'
            tipo='false'
            col = '8 4'
            onChange={props.onChange}/>
        <Form value={props.state.senha}
            id='Senha'
            handle='0'
            tipo='text'
            col = '10 5'
            placeholder='senha 8-12 char'
            onChange={props.onChange}/>
        <Form value={props.state.senha}
            id='SenhaConf'
            handle='0'
            tipo='text'
            col = '10 5'
            placeholder='Confirme sua senha'
            onChange={props.onChange}/>
        <Grid cols='6 3'>
            <Icon style='primary' icon='plus' hide={true} onClick={props.onClick}></Icon>
        </Grid>
    </div>
)