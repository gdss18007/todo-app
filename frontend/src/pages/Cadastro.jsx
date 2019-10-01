import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {changeCpf,CheckCPF} from './actions'
import {bindActionCreators} from 'redux'

import Header from '../template/header'
import FormCadastro from './formulario_cadastro'
const URL = 'http://localhost:3003/api'
class Cadastro extends Component{
    
    render(){
        return(
            <div>
                <Header name='Agendamento online' small='Cadastro'/>
                <FormCadastro
                state={this.props.paciente}
                onChange={this.changeCpf}
                onClick={this.CheckCPF}/>
                <br/>
            </div>
            )
    }
}
const mapStateToProps = state =>({
    paciente:state.paciente
})
const mapDispatchToProps = dispatch => bindActionCreators({changeCpf,CheckCPF},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Cadastro)