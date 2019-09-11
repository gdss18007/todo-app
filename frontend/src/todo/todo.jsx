import React, {Component} from 'react'
import Header from '../template/header'
import Form from './form'
import List from './list'
export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {cpf:'', list:[]}
        this.handleChange=this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleChange(e){
        this.setState({...this.state,cpf: e.target.value})
        console.log(this.state.cpf)
    }
    handleAdd(){
        //console.log(this)
    }
    render(){
        return(
            <div>
                <Header name='Agendamento online' small='Cadastro'/>
                <Form cpf={this.state.cpf}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}/>
                <List/>
            </div>
            )
    }
}