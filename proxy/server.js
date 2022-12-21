const app = require('./routing.js');
const service = require('./service.js');


app.listen(service.get('port'));

