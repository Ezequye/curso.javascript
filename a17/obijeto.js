
let res =document.querySelector('div#res')




let pessoa = {
        nome: 'jonata',
        idade: 35,
        feliz: true,
        pets: ["cachorro","gato"],
        carros: {
            camaro:{
                placa: "123456",
                cor:"verde"
            },
            uno: {
                placa:"987654",
                cor:"branco"
            }
        },
        andar: function(km){
            res.innerHTML=(pessoa.nome+ " andou "+km+" km")
        }
    }


    pessoa.andar(50)


