const fs = require('fs')

function form() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');

    fs.writeFile('scripts/form.txt', fname, lname, email, (err) => {
          
        // In case of a error throw err.
        if (err) throw err;
    })

}