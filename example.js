var print = require('./');

var div = document.createElement('div');
var h2 = document.createElement('h2');
h2.innerHTML = 'HEJ!!!!!!'

var h22 = document.createElement('h2');
h22.innerHTML = 'Hola!'


div.appendChild(h2);
document.body.appendChild(div);
document.body.appendChild(h22);

print(div);
