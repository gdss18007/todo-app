const INITIAL_STATE ={cpf:'02320963251',
nome:'gabriel'}
export default (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'cpf_digitado':
            console.log(state.cpf)
            return {...state,cpf: action.payload}
        case 'check_CPF':
            return
        default:
            return state
    }
}