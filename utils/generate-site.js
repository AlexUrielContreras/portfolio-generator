const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
            reject (err)
            return;
        } 
            resolve ({
                ok: true,
                message: 'File created!'
            })
        })
    })
};

const copyFile = () => {
    return new promise((resolve, reject) => {
        fs.copyFile('./dist/index.html', 'styles.css', err => {
            if (err) {
                reject (err)
                return;
            }
            resolve ({
                ok: true,
                message: 'File has been copied'
            })
        })
    })
}

module.export = { writeFile, copyFile};