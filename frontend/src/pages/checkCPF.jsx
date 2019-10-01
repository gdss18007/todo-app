import React, {Component} from 'react'
import Grid from '../template/grid'
import Icon from '../template/iconButton'
import Form from '../template/form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import axios from 'axios'
import {changeCpf} from './actions'
import Header from '../template/header'
const URL = 'http://localhost:3003/api'
class CheckCpf extends Component{
    constructor(props){
        super(props)
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleAdd(){
        axios.get(URL+'/paciente?CPf='+this.props.paciente.cpf).then(response => {
            this.setState({...this.props.paciente,cpf:response.data[0]['CPf'],nome:response.data[0]['Nome']})
            window.location='#/cadastro'})
        .catch(error => { console.log(response.error) })
    }
    render(){
        return(
            <div>
                <Header name='Agendamento online' small='Cadastro'/>
                <Form value={this.props.paciente.cpf}
                    id='CPF'
                    tipo='text'
                    col = '6 3'
                    placeholder='CPF ...'
                    change={this.props.changeCpf}/>
                <Grid cols='6 3'>
                    <Icon style='primary' icon='plus' hide={true} onClick={this.handleAdd}></Icon>
                </Grid>
            </div>
            )
    }
}
const mapStateToProps = state =>({
    paciente:state.paciente
})
const mapDispatchToProps = dispatch => bindActionCreators({changeCpf},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(CheckCpf)