require('dotenv').config();
const path = require('path');
const express = require('express');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT ?? 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});