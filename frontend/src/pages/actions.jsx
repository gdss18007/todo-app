import axios from 'axios'
const URL = 'http://localhost:3003/api'
export const changeCpf = e => ({
    type: 'cpf_digitado',
    payload: e.target.value,
})
export const CheckCpf = () => {
    const request = axios.get(URL+'/paciente?CPf='+this.props.paciente.cpf)
    .catch(error => { console.log(response.error) })
    return{
        type:'check_CPF',
        payload: request
    }
}