const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/execute-python', (req, res) => {
  exec('python your_python_script.py', (error, stdout, stderr) => {
    if (error) {
      console.error('Error:', error);
      return res.status(500).send('Error executing Python script');
    }
    console.log('Python script executed successfully');
    return res.status(200).send('Python script executed successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});