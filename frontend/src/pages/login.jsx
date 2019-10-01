import React, {Component} from 'react'
import Grid from '../template/grid'
import Icon from '../template/iconButton'
import Form from '../template/form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {changeCpf,checkSenha,autenticar} from './actions'
import Header from '../template/header'
class Login extends Component{
    render(){
        return(
            <div>
                <Header name='Agendamento online' small='Login'/>
                <Form value={this.props.paciente.cpf}
                    id='CPF'
                    tipo='text'
                    col = '6 3'
                    placeholder='CPF ...'
                    change={this.props.changeCpf}/>
                <Form value={this.props.paciente.cpf}
                    id='senha'
                    tipo='password'
                    col = '6 3'
                    placeholder='senha...'
                    change={this.props.checkSenha}/>
                <Grid cols='6 3'>
                    <Icon style='primary' icon='plus' hide={true} onClick={()=>this.props.autenticar(this.props.paciente.cpf)} ></Icon>
                </Grid>
            </div>
            )
    }
}
const mapStateToProps = state =>({
    paciente:state.paciente
})
const mapDispatchToProps = dispatch => bindActionCreators({changeCpf,checkSenha,autenticar},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Login)