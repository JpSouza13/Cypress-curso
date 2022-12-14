var faker = require('faker')

export default {

    deliver : function(){
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf : "66666666656",
            email: faker.internet.email(firstName),
            whatsapp:"99999999955",
            address: {
                postalcode: "04534011",
                street: "Rua Joaquim Floriano",
                number: "1000",
                details: "Ap 142",
                district: "Itaim Bibi",
                city_state: "São Paulo/SP"
            },
            delivery_method : "Moto",
            cnh: "cnh-digital.jpg"
            }
            return data
    }
}