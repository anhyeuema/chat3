var base64 = require('base-64'); //tren thu vien base64
var utf8 = require('utf8'); //su dung co dau tieng viet utf8

var text = 'khoapham12345456711111111111111111'; //chuoi se ma hoa
var bytes = utf8.encode(text); // chuyen nay thanh ting viet co dau
var encoded = base64.encode(bytes); //ma hoa  chuoi nay
//console.log(encoded); //log ket qua ma hoa ra
/*
console.log(encoded);
console.log(bytes);
console.log(text.toString());
*/

var fs = require('fs');

/*
var noidung = fs.readFileSync(__dirname + "/1.jpg");
*/

var noidung = fs.readFileSync(__dirname + "/public" + "/1.jpg");
function getBase64Image(imgData) {
  return imgData.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
}
//console.log('noidungbuffer::::',noidungbuffer);


console.log('-----test fs-----');
console.log(noidung);
const fileanh = noidung.toJSON();
const aaa = async () => {
  const fileanh = await noidung.toJSON();
  return fileanh;
}

aaa()
  .then(res => console.log(res));

console.log(noidung.toJSON());
console.log('fileanh:::::::', fileanh);

/*
var arrayBuffer = buffer.buffer.slice(
    buffer.byteOffset, buffer.byteOffset + buffer.byteLength
);
*/


var Buffer = require('buffer/').Buffer  // khai bao thu vien buffer


/*
var toArrayBuffer = require('to-arraybuffer');
var buffer = new Buffer(100);
// Fill the buffer with some data
var ab = toArrayBuffer(buffer);
// `ab` now contains the same data as `buffer`
console.log('------1------'); // log buffer ra
console.log(ab); // log buffer ra
*/


var text = 'khoapham12345456711111111111111111';
var bytes = Buffer(text); // truyen ve dang buffer
var textJson = bytes.toJSON();
console.log('-----test BUFFER-----');
console.log(bytes); // log buffer ra
console.log('-----toJSON-----');
console.log(bytes.toJSON());
console.log(bytes.toString());



var fs = require('fs');
// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file); // chuyen buffer
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64'); //chuyen thanh base64
}

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
  // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
  var bitmap = new Buffer(base64str, 'base64');
  // write buffer to file
  fs.writeFileSync(file, bitmap);
  console.log('******** File created from base64 encoded string ********');
}

// convert image to base64 encoded string
var base64str = base64_encode('1.jpg');
console.log('----base64str------');
console.log(base64str);




var bitmap1 = fs.readFileSync('1.jpg'); //chuyen thanh buffer


console.log('-----bitmap1----');
console.log(bitmap1);
console.log('-----base64----');
console.log(Buffer(bitmap1).toString('base64')); // buffer chuyen base64
console.log('-----=========================================----');
console.log('fileanh:::::::', fileanh);

/*
// convert base64 string back to image
base64_decode(base64str, 'copy.jpg');
*/



var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000, console.log('server_start'));






io.on('connection', async (socket) => {
  console.log('co nguoi vua ket noi: ' + socket.id);
  await socket.on('client-send-color', async (data) => {
    console.log(data);
    // console.log('app vua gui massage: ' + Buffer(data));
    data.dataClient.map(async (e1) => {
      var dataJsonC = await e1.dataJsonC;
      var dataJsonImageC = await e1.dataJsonImageC;
      console.log('dataJsonC:::::::::', dataJsonC);
      console.log('app vua gui massage: ' + Buffer(dataJsonC));
      console.log('dataJsonImageC:::::::::', dataJsonImageC);
      //console.log('dataJsonImageC:::::::::', Buffer(dataJsonImageC).toString('base64'));
    });
    var dataServer = data; // nhu data do data la mang nen t chuyen luon data ha dataServer va DATAS la duoc
    console.log('dataServer:::::', dataServer);
    var DATAS = (await { typedata: [{ anh: noidung, id: socket.id, text: textJson }], type: [{ ba: '3', hai: '2' }], noidungemit: await [{ dataImageJson: await fileanh }], fileBase: [{ fileImgaBase: base64str, bufferImage: bitmap1 }], dataServer });
    
    await io.sockets.emit('server-send-client', await DATAS);

    DATAS.noidungemit.map(async (e0) => {
      var dataImageJson1 = await e0.dataImageJson;
      console.log('----dataImageJson----');
      console.log(dataImageJson1);
      console.log('----dataImageJson111======----');
      console.log('----dataImageJson1111=======----');
      console.log(await Buffer(dataImageJson1).toString('base64'));
    });
    console.log('--------------=====emit:::::::::');
    DATAS.dataServer.dataClient.map(async (e1) => { //de lay phan tu trong mang dataClient tu DATAS ta lay duoc tu DATAS.dataServer.dataClient.map(....)
      const dataJsonC = await e1.dataJsonC;
      const dataJsonImageC = await e1.dataJsonImageC;
      console.log('dataJsonCemit:::::::::', dataJsonC);
      console.log('dataJsonImageCemit:::::::::', dataJsonImageC);
    });

  });
});



{




  /*
  await io.emitAsync("server-send-client",DATAS)
    .then(function (data) {
      console.log(data);
    })
    .catch(function (e) {
      console.log(e.message);
    });
  */

  /*
var Promise = require("bluebird");
io.emitAsync = Promise.promisify(io.emit);
io.emitAsync("report", {
  "name": "thomas"
}).then(function(data){
  console.log(data)
}).catch(function(e){
  console.log(e.message)
});
*/

/*
var _ = require("underscore");
var Promise = require("bluebird");

io.emitAsync = function (event, payload) {
  return new Promise(function (resolve, reject) {
    return io.emit(event, payload, function () {
      var args = _.toArray(arguments);
      if (args[0]) return reject(new Error(args[0]));
      return resolve.apply(null, args);
    });
  });
}
*/
}
{/*
io.on('connection', async (socket) => {
  console.log('co nguoi vua ket noi: ' + socket.id);
  await socket.on('client-send-color', async (data) => {
    console.log(data);
    // console.log('app vua gui massage: ' + Buffer(data));
    data.dataClient.map(async (e1) => {
      var dataJsonC = await e1.dataJsonC;
      var dataJsonImageC = await e1.dataJsonImageC;
      console.log('dataJsonC:::::::::', dataJsonC);
      console.log('app vua gui massage: ' + Buffer(dataJsonC));
      console.log('dataJsonImageC:::::::::', dataJsonImageC);
      //console.log('dataJsonImageC:::::::::', Buffer(dataJsonImageC).toString('base64'));
    });
   var dataServer = data; // nhu data do data la mang nen t chuyen luon data ha dataServer va DATAS la duoc
    console.log('dataServer:::::', dataServer);
    var DATAS = (await {dataServer, typedata: [{ anh: noidung, id: socket.id, text: data }], type: [{ ba: '3', hai: '2' }], noidungemit: await [{ dataImageJson: await fileanh }], fileBase: [{ fileImgaBase: base64str, bufferImage: bitmap1 }] });
    await io.sockets.emit('server-send-client', await DATAS);
    DATAS.noidungemit.map(async (e0) => {
      var dataImageJson1 = await e0.dataImageJson;
      console.log('----dataImageJson----');
      console.log(dataImageJson1);
      console.log('----dataImageJson111======----');
      console.log('----dataImageJson1111=======----');
      console.log(await Buffer(dataImageJson1).toString('base64'));
    });
    console.log('--------------=====emit:::::::::');
    DATAS.dataServer.dataClient.map(async (e1) => { //de lay phan tu trong mang dataClient tu DATAS ta lay duoc tu DATAS.dataServer.dataClient.map(....)
      const dataJsonC = await e1.dataJsonC;
      const dataJsonImageC = await e1.dataJsonImageC;
      console.log('dataJsonCemit:::::::::', dataJsonC);
      console.log('dataJsonImageCemit:::::::::', dataJsonImageC);
    });

  });
});
*/}

/*
//var pipe = require('pipe');
//var stream = require('stream');
var ss = require('socket.io-stream');
var path = require('path');
var a = fs.createWriteStream('1.jpg');
    console.log('-------xxx------');
    console.log((fs.createWriteStream('1.jpg')));
*/

{/* readStream.on('data', function(data) {
  var buffer = writeStream.write(data); // return false nếu buffer full.
  if (!buffer) readStream.pause();
});
writeStream.on('drain', function() {
  readStream.resume();
});
=== readStream.pipe(writeStream); */}


/*
var io = require('socket.io').listen(3000);
var ss = require('socket.io-stream');
var path = require('path');

io.of('/user').on('connection', function(socket) {
  ss(socket).on('profile-image', function(stream, data) {
    var filename = path.basename(data.name);
    stream.pipe(fs.createWriteStream(filename));
  });
});

// send data
ss(socket).on('file', function(stream) {
  fs.createReadStream('/path/to/file').pipe(stream);
});

// receive data
ss(socket).emit('file', stream);
stream.pipe(fs.createWriteStream('file.txt'));



    ss(socket).emit('server-send-client', stream [{newdata: stream.pipe(fs.createWriteStream('1.jpg')) }]  );
    var xxx = stream.pipe(fs.createWriteStream('1.jpg'));
*/

//console.log(text.toJSON());


/*
var roles = {
  sender  : "",
  receiver    : ""
};
io.sockets.on('connection', function (socket) {
  socket.on('setRole', function (data) {
    socket.role = data.trim();
    roles[socket.role] = socket.id;
    console.log("Role "+ socket.role + " is connected.");
  });

  socket.on("sendPhoto", function(data){
    var guess = data.base64.match(/^data:image\/(png|jpeg);base64,/)[1];
    var ext = "";
    switch(guess) {
      case "png"  : ext = ".png"; break;
      case "jpeg" : ext = ".jpg"; break;
      default     : ext = ".bin"; break;
    }
    var savedFilename = "/upload/"+randomString(10)+ext; //Trong sự kiện sendPhoto  ở trên, mình xử lý lưu ảnh vào thư mục public/upload/  co ten file lay gay nhien randomString(10)+ext
    fs.writeFile(__dirname+"/public"+savedFilename, getBase64Image(data.base64), 'base64', function(err) {
      if (err !== null)
        console.log(err);
      else
        io.to(roles.receiver).emit("receivePhoto", {
          path: savedFilename,
        });
        console.log("Send photo success!");
    });
  });

  socket.on('disconnect', function() {
    console.log("Role " + socket.role + " is disconnect.");
  });
});

function randomString(length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function getBase64Image(imgData) {
    return imgData.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
}
*/
