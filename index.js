const { leerInput, inquirerMenu, pausa, } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async() => {
    
    const Busquedas = new Busquedas();
    let opt;

    do{

        opt = await inquirerMenu();
        console.log({opt});
        
        switch( opt ) {

            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                console.log(lugar);
                
                // Buscar los lugares
                
                
                // Seleccionar el lugar
                

                // Clima
                

                // Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:',  );
                console.log('Lat:',  );
                console.log('Lng:', l);
                console.log('Temperatura:', );
                console.log('Mínima:',  );
                console.log('Máxima:', );
                console.log('Como está el clima:',  );

            break;


        }
        



        if ( opt !== 0 ) await pausa();

    } while ( opt !== 0 )

}

main();