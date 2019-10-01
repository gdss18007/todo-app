import axios from 'axios'
const URL = 'http://localhost:3003/api'
export const changeCpf = e => ({
    type: 'cpf_digitado',
    payload: e.target.value,
})
export const CheckCPF = (cpf) => {
    const request = axios.get(URL+'/paciente?CPf='+cpf).then(response => response.data[0])
    .catch(error => { console.log('não encontrou') })
    return{
        type:'check_CPF',
        payload: request
    }
}
export const addPaciente = (paciente) => {
    console.log(paciente)
    console.log('funciona!'+URL+'/paciente')
    axios.put(URL+'/paciente/'+paciente._id,{CPf:paciente.cpf,Nome:paciente.nome,senha:paciente.senha,telefone:'',cadastroOnLine:true})
    return{
        type:'add_paciente'
    }
}
export const checkSenha = e => ({
    type: 'senha_digitada',
    payload:e.target.value
})
export const checkSenhaConf = e => ({
    type: 'senhaConf_digitada',
    payload:e.target
})