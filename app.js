const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');



console.clear();

// console.log(argv);
// console.log('base: yargs', argv.base);


// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5 ] =arg3.split('=');
// console.log(base);



// const base = 4;


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

// fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
//     if(err) throw err;

//     console.log(`Tabla-${base}.txt creada`);
// });