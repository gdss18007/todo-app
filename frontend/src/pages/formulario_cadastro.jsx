import React from 'react'
import Grid from '../template/grid'
import Icon from '../template/iconButton'
import Form from '../template/form'
import FormDis from '../template/formDisabled'
export default props => (
    <div>
        <FormDis value={props.state.cpf}
            id='CPF'
            handle='0'
            tipo='text'
            col = '8 4'/>
        <FormDis value={props.state.nome}
            id='Nome'
            handle='0'
            tipo='text'
            col = '8 4'/>
        <Form value={props.state.senha}
            id='Senha'
            handle='0'
            tipo='password'
            col = '10 5'
            placeholder='senha 8-12 char'
            change={props.onChange}/>
        <Form value={props.state.senha}
            id='SenhaConf'
            handle='0'
            tipo='password'
            col = '10 5'
            placeholder='Confirme sua senha'
            change={props.onChangeConf}/>
        <Grid cols='6 3'>
            <Icon style='primary' icon='plus' hide={true} onClick={props.onClick}></Icon>
        </Grid>
    </div>
)