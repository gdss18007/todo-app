const INITIAL_STATE ={
    _id:'',
    cpf:'',
    nome:'',
    senha:''}
export default (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'cpf_digitado':
            console.log(state.cpf)
            return {...state,cpf: action.payload}
            case 'autenticar':
                if(action.payload['CPf']==state.cpf){
                    if(action.payload['cadastroOnLine']){
                        if(action.payload['senha']==state.senha){
                        alert('Entrou')
                        }
                        else{
                        alert('Senha incorreta')
                        }
                    }else{
                        alert('CPF não cadastrado no sistema de agendamento online\nfaça o cadastro na guia cadastro')    
                    }
                }else{
                    alert('CPF não cadastrado na clinica')
                }
            return {...state,cpf: action.payload}
        case 'check_CPF':
            if(action.payload['CPf']==state.cpf){
                if(!action.payload['cadastroOnLine']){
                    window.location = '#/cadastro'
                    console.log('tá mudando state')
                    return {...state,_id:action.payload['_id'],cpf: action.payload['CPf'],nome:action.payload['Nome']}
                }
                else{
                    alert('CPF já cadastrado\n faça o login')
                    window.location = '#/checkCpf'
                    return state
                }
        }
        else {alert("Não cadastrado")}
        case 'senha_digitada':
            console.log(state.senha)
            return {...state,senha: action.payload}
        case 'add_paciente':
            return {...state,senha: action.payload}
        case 'senhaConf_digitada':
            const event =action.payload
            if(event.value!=state.senha){
                event.style.color = "red"
                console.log('senhas diferentes')
            }
            else{
                event.style.color = "green"
            console.log('senhas iguais')
            return state
        }
            return state
            
        default:
            return state
    }
}