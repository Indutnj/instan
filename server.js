const express = require("express");
const cors = require('cors');
const app = express();
const dbConnection = require("./db")
const usersRoute = require("./routes/usersRoute")
const postsRoute = require("./routes/postsRoute")
app.use(express.json({limit : '25mb'}))
app.use(cors({
  //https://profound-medovik-b95ea9.netlify.app
    origin: 'http://localhost:3000', // Allow requests from your local frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //allowedHeaders: 'Content-Type,Authorization',
  }));
const path = require('path')
app.use('/api/users/' , usersRoute)
app.use('/api/posts/' , postsRoute)

const port = process.env.PORT || 5000;
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
})

if(process.env.NODE_ENV === 'production')
{
    
//    app.use('/' , express.static('client/build'))
/////////

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

//////////
   // app.get("*", (req, res) => {
     //   res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  //  });
}

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
