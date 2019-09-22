import React, {Component} from 'react'
import axios from 'axios'

import Header from '../template/header'
import List from './list'
import FormCadastro from './formulario_cadastro'
const URL = 'http://localhost:3003/api'
export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {cpf:'', list:[]},{nome:'',list:[]},{telefone:'',list:[]}
        this.handleChange=this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleChange(e){
        this.setState({...this.state,cpf: e.target.value})
        console.log(this.state.cpf)
        this.setState({...this.state,nome: e.target.value})
        console.log(this.state.nome)
        this.setState({...this.state,telefone: e.target.value})
        console.log(this.state.telefone)
    }
    handleAdd(){
        console.log('funciona!')
    }
    render(){
        return(
            <div>
                <Header name='Agendamento online  ' small='Cadastro'/>
                <FormCadastro state={this.state}
                onChange={this.handleChange}
                onClick={this.handleAdd}/>
                <br/>
                <List/>
            </div>
            )
    }
}