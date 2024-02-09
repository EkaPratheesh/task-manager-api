const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;

const data = require("./task.json");
const Validation = require("./validation");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/tasks", (req, res) => {
  console.log(res.body);
  return res.status(200).send(data.tasks);
});

app.get("/tasks/:id", (req, res) => {
  let id = req.params.id;
  let task = data.tasks.filter((item) => {
    return item.id == id;
  });
  return res.status("200").send(task);
});

app.post("/tasks", (req, res) => {
    const items = req.body;
    if(Validation.validateTaskInfo(items).status==true) {
      const details = data;
      details.tasks.push(items);
      fs.writeFile('./task.json', JSON.stringify(details), {encoding:'utf-8', flag:'w'}, (err, data)=>{
          if(err) {
              return res.status(500).send('something went wrong');
          }
          return res.status(201).send('Updated'); 
      });
    } else {
      return res.status(400).json(Validation.validateTaskInfo(items));
    }    
});

app.put('/tasks/:id',(req, res)=>{
    const id = req.params.id;
    const details = data; 

    let task  =  details.tasks.findIndex(obj => obj.id == id);
    if(task) {
      details.tasks.splice(task, 1);
      details.tasks.push(req.body);
      return res.status(200).send('updated')
    }


    /* let task = data.tasks.filter(item=>{
        if(item.id==id) {
            item=req.params;
        }
    }); */
    return task;
});

app.delete('/tasks/:id',(req, res)=>{
    const id = req.params.id;
    const details = data; 
    let result = details.tasks.splice(details.tasks.findIndex(item =>{
       return item.id === Number(id);
    }) , 1);
    if(result) {
        res.status(200).send('Deleted');
    }
});

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
