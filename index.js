const express = require("express");
const dotenv = require("dotenv");
const app = express();

// CONFIGS
const PORT = 8000;
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// ROUTES
const rotaLogistica = require("./routes/logistica");
app.use('/logistica', rotaLogistica);


app.listen(PORT, () => {
    console.log('SERVIDOR INICIADO NA PORTA ' + PORT);
});