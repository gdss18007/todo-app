import axios from 'axios'
const URL = 'http://localhost:3003/api'
export const changeCpf = e => ({
    type: 'cpf_digitado',
    payload: e.target.value,
})
export const CheckCPF = (cpf) => {
    const request = axios.get(URL+'/paciente?CPf='+cpf).then(response => response.data[0])
    .catch(error => { console.log('não encontrou') })
    request.data
    return{
        type:'check_CPF',
        payload: request
    }
}