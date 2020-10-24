const _ = require('lodash')
setInterval(() => console.log(`X = ${_.random(1, 10)}, Y =  ${_.random(1, 10)}`), 200)
