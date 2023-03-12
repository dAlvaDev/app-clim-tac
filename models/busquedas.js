const fs = require('fs');

const axios = require('axios');


class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //TODO leer DB si existe
        this.leerDB();
    }

    async ciudad( lugar = '' ) {
        //Petición http
        console.log(lugar);

        return []; // retornar los lugares
    }

}





module.exports = Busquedas;