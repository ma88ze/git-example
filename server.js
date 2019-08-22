const express =require('express');

const app = new express();
const port = 3000;
app.get('/' , (req , res , next) => {
    res.send('Hello');
});

app.listen(port , () => {
    console.log(`server is runing on port ${port} `);
});