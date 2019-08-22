const express =require('express');

const app = new express();

app.get('/' , (req , res , next) => {
    res.send('Hello');
});

app.listen(3000 , () => {
    console.log('server is runing on port 3000');
});