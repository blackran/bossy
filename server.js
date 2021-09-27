const express = require('express');
const mongoose = require('mongoose');
// const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const { readdirSync } = require('fs')
const path = require('path');


const app = express();


app.use(cors());
app.options('*', cors());
// app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));


// Error
const AppError = require('./utils/appError');

//routes
const userRoutes = require('./routes/userRoutes');


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

dotenv.config({ path: './config.env' });

// Mode productions 
// const DB = process.env.DATABASE.replace('<PASSWORD>',
//            process.env.DATABASE_PASSWORD);


// // mongoose.connect(DB, {
// //   useNewUrlParser: true,
// //     useCreateIndex: true,
// //     useFindAndModify: false,
// //     useUnifiedTopology: true
// //   }).then(() => console.log('MongoDB Connected'))
// //   .catch(err => console.log(err));


// Local
mongoose
    .connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    .then(() => console.log('MongoDB connecté'))
    .catch(err => console.log(err));




// Use Routes
readdirSync('./routes').map((r) =>
    app.use('/api', require(`./routes/${r}`))
);


app.use(morgan('dev'));
app.use(cookieParser());
app.use(mongoSanitize());
// app.use(xss());



// 404 Page not Found
// app.all('*', (req, res, next) => {

//     next(new AppError(`Impossible de trouver ${req.originalUrl} sur ce serveur`));
// });

// app.use('/backoffice/', express.static(path.join(__dirname, 'admin-dashboard/build')));
// app.get('/backoffice/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'admin-dashboard/build/index.html'));
// });

app.use('/backoffice',express.static(path.join(__dirname, 'admin-dashboard/build')));
app.get('/backoffice/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'admin-dashboard/build/index.html'));
});

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});



const port = process.env.PORT || 5000;

const server = app.listen(port, () => console.log(`Serveur exécuté sur le port ${port}`));

// Errors outside Express Unhandled Rejections
process.on('unhandledRejection', err => {
    console.log('REJET NON GÉRÉ ! Arrêt.....');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

process.on('SIGTERM', () => {
    console.log('SIGTERM REÇU. Arrêter gracieusement');
    server.close(() => {
        console.log('Processus terminé!');
    });
});
