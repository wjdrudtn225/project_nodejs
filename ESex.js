const fs = require('fs')

function readFilee(fname) {
    return new Promise((resolve, reject) => {
        fs.readFile(fname, 'utf-8', (err, data) => {
        resolve(data)
    })
})
}

async function readAll () {
    const test = await readFilee('res/tests.txt')
    console.log(test)
    const test2 = await readFilee('res/tests2.txt')
    console.log(test2)
    const test3 = await readFilee('res/test3.txt')
    console.log(test3)
}

readAll()