const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listar } = require('./multiplicar/multiplicar');


// console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv);

let comando = argv._[0];

// console.log(argv);


switch (comando) {
    case 'listar':
        console.log('listar');
        listar(argv.base, argv.limite)
            .then(lista => {
                console.log(lista);
            })
            .catch(e => console.log(e));
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido')
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];