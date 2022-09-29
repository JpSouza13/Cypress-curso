
describe('home page',()=>{     //Nome do teste
    it('app deve estar online',()=>{  //nome do caso de teste
        cy.viewport(1440,900)         // tamanho da tela 
        cy.visit('https://buger-eats.vercel.app/')        
        cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats') 

    }
    )
}
)