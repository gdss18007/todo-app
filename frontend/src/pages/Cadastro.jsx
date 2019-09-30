import React, {Component} from 'react'
import axios from 'axios'

import Header from '../template/header'
import FormCadastro from './formulario_cadastro'
const URL = 'http://localhost:3003/api'
export default class Cadastro extends Component{
    constructor(props){
        super(props)
        this.state = 
        this.handleChange=this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleChange(e){
        console.log(e.target.id)
        switch(e.target.id){
            case "CPF":
                this.setState({...this.state,cpf: e.target.value})
                console.log(this.state.cpf)
                break        
            case "nome":
                this.setState({...this.state,nome: e.target.value})
                console.log(this.state.nome)
                break
            case "senha":
                this.setState({...this.state,telefone: e.target.value})
                console.log(this.telefone)
                break
            case "senhaConf":
                this.setState({...this.state,telefone: e.target.value})
                console.log(this.telefone)
                break
        }
    }
    handleAdd(){
        const cpf = this.state.cpf
        const nome = this.state.nome
        const senha = this.state.senha
        axios.put(URL+'/paciente?CPf='+this.state.cpf,{senha:senha}).then(console.log('funciona!'+URL+'/paciente'))
        .catch(error => { console.log(error.response) })
    }
    render(){
        return(
            <div>
                <Header name='Agendamento online' small='Cadastro'/>
                <FormCadastro
                state={this.state}
                onChange={this.handleChange}
                onClick={this.handleAdd}/>
                <br/>
            </div>
            )
    }
}