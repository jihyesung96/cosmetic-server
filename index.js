//node는 Common JS를 사용함
//불러올때 require를 사용
const http = require('http');
const { type } = require('os');
//본인 컴퓨터 주소를 의미함!!
const hostname = '127.0.0.1';
const port = 8080;
//createServer() ---> 서버생성
//요펑정보 req, 응답정보 res
const server = http.createServer(function(req,res){
    const path = req.url;
    const method = req.method;
    if(path==="/products"){
        //응답을 보낼때 json객체를 보낼거야
        res.writeHead(200,{'content-type':'application/json'})
        //객체를 json으로 반환 JSON.stringify(obj)
        const product = JSON.stringify({
            name : "기초화장품",
            price : 50000
        })
        res.end(product);
    }
    else{
        res.end("빨리 수업 마치고 싶다");
    }
})

//listen 은 대기 호스트네임과 포트번호 요청을 기다림
server.listen(port,hostname);
console.log("화장품 서버가 동작 중입니다.");