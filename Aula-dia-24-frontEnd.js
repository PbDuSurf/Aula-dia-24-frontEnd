let conta ={
    codigo:'001',
    saldo: 1000.00
};

let cliente={
    conta:'001',
    usuario: 'zeze@gmail.com',
    senha:'12345',
    status: false
};

function autenticar(login,senha,operacao,valor){
    
    console.log('====Autenticar====')
   
    setTimeout(() =>{
    if(login===cliente.login && senha===cliente.senha){
        cliente.status=true;
        
        console.log('autenticado');
        operacao(valor);
        
   }else{
       cliente.status = false;
       console.log('login e/ou senha inválidos' );
     }
   },2000);
}

function saque(valor){
    console.log('===Saque===');
    
    if(cliente.status){
        if(valor<=conta.saldo){
            conta.saldo -= valor;
        }else{
            console.log('saldo insuficiente!');
        }
        extrato();
    }else{
        console.log('Acesso negado!')
    }
}
function deposito(valor){
    console.log('===Deposito===');
    
    if(cliente.status){
        if(conta.saldo){
            conta.saldo += valor;
        }else{
            console.log('saldo insuficiente!');
        }
        extrato();
    }else{
        console.log('Acesso negado!')
    }
}


const login = 'zeze@gmail.com';
const senha = '12345';

autenticar(login,senha,saque,100);
autenticar(login,senha,deposito,300);

//saque(100);
//extrato():

