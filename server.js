const express=require('express');
const bodyParser = require('body-parser');
const path=require('path');
const dotenv=require('dotenv');
const app=express();
app.use(express.json());
dotenv.config({ path: path.resolve(__dirname, '.env') });
app.post('/bfhl', (req, res) => {
    try {
      let { data } = req.body;
      console.log(data);

      let user_id="joel_jaji_varghese_16062002";
      let college_email="joel.varghese2020@vitbhopal.ac.in";
      let college_roll_number="20BCE10089";
      let nos=[];
      let alp=[];
      let highest="";
      data.forEach((str) => {
        for (let i = 0; i < str.length; i++) {
          let char = str[i];
          if (/[0-9]/.test(char)) {
            nos.push(char);
          } else if (/[a-zA-Z]/.test(char)) {
            alp.push(char);
            if (highest === null || char > highest) {
                highest = char;
              }
          }
        }
      });
      const response = {
        is_success: true,
        user_id:user_id,
        college_email:college_email,
        college_roll_number:college_roll_number,
        nos:nos,
        alp:alp,
        highest:highest,
      };
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ is_success: false, error: 'Internal Server Error' });
    }
  });


  app.get('/bfhl', (req, res) => {
    try {
      const response = {
        operation_code:1
      };
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ is_success: false, error: 'Internal Server Error' });
    }
  });
  const PORT=process.env.PORT || 5000;
  app.listen(PORT,console.log(`Server started on port ${PORT} `));