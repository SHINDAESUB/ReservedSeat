const express = require('express')
    http = require('http')
    fs = require('fs')
    path = require('path')
    app = express()
    bodyParser = require('body-parser')
    // mysql = require('mysql')
    // db  = require('./database.js')


const server = app.listen(3001, function() {
    console.log('소켓 port 3001');
});

const io = require('socket.io')(server);

io.on('connection' , function(socket) {
    console.log('Connect from Client: '+socket)

    socket.on('chat', function(data){
        console.log('message from Client: '+data)

        // const jsonFile = fs.readFileSync('./json/seats.json', 'utf8');    
        // const jsonData = JSON.parse(jsonFile);
        // var rtnMessage = {
        //     message: data.message
        // };

        // 클라이언트에게 메시지를 전송한다
        io.sockets.emit('chat', data);
    });
})


//Post 방식은 Get 과 다르기 때문에 body-parser 를 설치해서 사용해야한다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')));

app.set('port',process.env.PORT || 3000);



app.get('/api/getSeats',(req,res) => {
    const jsonFile = fs.readFileSync('./json/seats.json', 'utf8');    
    const jsonData = JSON.parse(jsonFile);

    
    res.send(jsonData)
})

app.post('/api/seatsModify',(req,res) => {
    console.log(req.body.params)
    console.log(req.body.params.seat)
    console.log(req.body.params.seatId)

    fs.readFile('./json/seats.json', 'utf8',(err ,data) => {
        let showData = JSON.parse(data)

        for(let i in showData[req.body.params.seat]){
            // console.log(showData[req.body.params.seat][i].id)
            if(showData[req.body.params.seat][i].id === req.body.params.seatId){
                showData[req.body.params.seat][i].pw = req.body.params.pw
                showData[req.body.params.seat][i].name = req.body.params.name
                showData[req.body.params.seat][i].seat_active = req.body.params.seat_active
            }

        }
        fs.writeFile('./json/seats.json', JSON.stringify(showData), (err)=>{
            if (err){
                res.send(false)         
            }else{
                console.log('JSON FILE 수정 완료');
                res.send(true)
            }

        });
    })
})

http.createServer(app).listen(app.get('port'),function(){
    console.log('WebServer Port: ' +app.get('port'))
})