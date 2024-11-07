const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const UserRoutes = require('./routes/userRoute')
   


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors(corsOptions))

app.use('/', UserRoutes)

var corsOptions = {
    origin: "http://localhost:8081"
  };


  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  
  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
  });

