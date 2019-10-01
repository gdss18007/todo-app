import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import Header from '../template/header'
import FormCadastro from './formulario_cadastro'
const URL = 'http://localhost:3003/api'
class Cadastro extends Component{
    constructor(props){
        super(props)
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleAdd(){
        const cpf = this.props.paciente.cpf
        axios.get(URL+'/paciente?CPf='+cpf).then(console.log('funciona!'+URL+'/paciente'))
        .catch(error => { console.log(error.response) })
    }
    render(){
        return(
            <div>
                <Header name='Agendamento online' small='Cadastro'/>
                <FormCadastro
                state={this.props.paciente}
                onChange={this.handleChange}
                onClick={this.handleAdd}/>
                <br/>
            </div>
            )
    }
}
const mapStateToProps = state =>({
    paciente:state.paciente
})
export default connect(mapStateToProps)(Cadastro)