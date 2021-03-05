const app = require('./app');

//porta de acordo com o ambiente
app.listen(process.env.PORT || 3000);



