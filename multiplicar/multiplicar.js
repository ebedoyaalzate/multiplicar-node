//requireds
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es numero`);
            return;
        }

        let data = `Base= ${base}, limite= ${limite}\n`;

        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(colors.green(`tabla-${base}-al-${limite}.txt`))

        });

    });
}


let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido en la base ${base} no es numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido en el limite ${limite} no es numero`);
            return;
        }

        console.log('========================================'.green);
        console.log(`========Base= ${base}, limite= ${limite}=====`.red);
        console.log('========================================'.gray);

        let data = colors.green(`Base= ${base}, limite= ${limite}\n`);
        for (let i = 0; i <= limite; i++) {
            data += `${i} * ${base} = ${base*i}\n`;
        }

        resolve(data);

    })
}


module.exports = {
    crearArchivo,
    listar
}