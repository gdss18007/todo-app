import React, {Component} from 'react'
import {connect} from 'react-redux'
import {checkSenha,checkSenhaConf,addPaciente} from './actions'
import {bindActionCreators} from 'redux'

import Header from '../template/header'
import FormCadastro from './formulario_cadastro'
class Cadastro extends Component{
    render(){
        return(
            <div>
                <Header name='Agendamento online' small='Cadastro'/>
                <FormCadastro
                state={this.props.paciente}
                onChange={this.props.checkSenha}
                onChangeConf={this.props.checkSenhaConf}
                onClick={()=>this.props.addPaciente(this.props.paciente)}/>
                <br/>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    paciente:state.paciente
})
const mapDispatchToProps = dispatch => bindActionCreators({checkSenha,checkSenhaConf,addPaciente},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Cadastro)