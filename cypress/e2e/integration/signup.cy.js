import signup from '../../pages/SignupPage'
import SignupFactory from '../../factories/SignupFactory.js'

//import { it } from 'faker/lib/locales'

//case 1

describe('Signup',function(){
    //var signup = new SignupPage()
    // beforeEach(function(){
    //     cy.fixture('deliver').then((d)=>{
    //         this.deliver = d      
    // })
   
    // })
    
    it('User should be deliver',function(){

        var deliver = SignupFactory.deliver()
        
        signup.go()
        signup.filForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.modalContent(expectedMessage)
        
    })

//case 2

    it('Invalid Document',function(){

        let deliver = SignupFactory.deliver()
        deliver.cpf = 'a123456987a'

        signup.go()
        signup.filForm(deliver)
        signup.submit()
        signup.alertMessage('Oops! CPF inválido')
        
    })

    it('Invalid Email',function(){
        let deliver = SignupFactory.deliver()
        deliver.email = 'user.com.br'

        signup.go()
        signup.filForm(deliver)
        signup.submit()
        signup.alertMessage('Oops! Email com formato inválido.')
        
    })

    context('Required fields',function(){
        const messages = [
            {field: 'name',output:'É necessário informar o nome'},
            {field: 'cpf',output:'É necessário informar o CPF'},
            {field: 'email',output:'É necessário informar o email'},
            {field: 'postalcode',output:'É necessário informar o CEP'},
            {field: 'number',output:'É necessário informar o número do endereço'},
            {field: 'delivery_method',output:'Selecione o método de entrega'},
            {field: 'cnh-digital.jpg',output:'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            signup.go()
            signup.submit()
        })  
          
        messages.forEach(function(msg){
            it(`${msg.field} is required`,function(){
                signup.alertMessage(msg.output)
            })
        })    
    
    })



    // it('Required fields', function(){

    //     signup.go()
    //     signup.submit()
    //     signup.alertMessage('É necessário informar o nome')
    //     signup.alertMessage('É necessário informar o CPF')
    //     signup.alertMessage('É necessário informar o email')
    //     signup.alertMessage('É necessário informar o CEP')
    //     signup.alertMessage('É necessário informar o número do endereço')
    //     signup.alertMessage('Selecione o método de entrega')
    //     signup.alertMessage('Adicione uma foto da sua CNH')



    // })
})


