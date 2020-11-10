const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
    res.end();
});
app.post('/',(req,res)=>{
    var exp= req.body.textview;
    var result = eval(exp);
    res.send("The result is "+result);
    res.end();
});
app.listen(3000,()=>console.log("listening on port 3000"));