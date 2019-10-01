const INITIAL_STATE ={
    cpf:'',
    nome:''}
export default (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'cpf_digitado':
            console.log(state.cpf)
            return {...state,cpf: action.payload}
        case 'check_CPF':
            if(action.payload['CPf']==action.CPf){
                window.location = '#/cadastro'
                console.log('tá mudando state')
                return {...state,cpf: action.payload['CPf'],nome:action.payload['Nome']}
        }
        default:
            return state
    }
}