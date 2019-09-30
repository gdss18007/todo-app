import React, {Component} from 'react'
import Grid from '../template/grid'
import Icon from '../template/iconButton'
import Form from '../template/form'

import axios from 'axios'

import Header from '../template/header'
const URL = 'http://localhost:3003/api'
export default class Cadastro extends Component{
    constructor(props){
        super(props)
        this.state =  {cpf:'',list:[]}
        this.handleChange=this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleChange(e){
        this.setState({...this.state,cpf: e.target.value})
        console.log(this.state.cpf)
    }
    handleAdd(){
        axios.get(URL+'/paciente?CPf='+this.state.cpf).then(response => {
            history.pushState(this.state,'checkCPF','#/checkCpf')
            window.location='#/cadastro'})
        .catch(error => { console.log("não encontrado") })
    }
    render(){
        return(
            <div>
                <Header name='Agendamento online' small='Cadastro'/>
                <Form value={this.state.cpf}
                    id='CPF'
                    handle='0'
                    tipo='text'
                    col = '6 3'
                    placeholder='CPF ...'
                    onChange={this.handleChange}/>
                <Grid cols='6 3'>
                    <Icon style='primary' icon='plus' hide={true} onClick={this.handleAdd}></Icon>
                </Grid>
            </div>
            )
    }
}