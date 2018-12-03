import io from 'socket.io-client/dist/socket.io.js';//yarn add react-native-socket.io-client// yarn add socket.io-client


const nhanData = async () => {
    try {
        const socketOn = await this.socket.on('server-send-client', async (data) => {

            console.log('data::::::::::::::::::::::', data);
            console.log('data.typedata::::', data.typedata);
            console.log('data.noidungemit::::', data.noidungemit);
            console.log('data.dataServer.dataClient::::', data.dataServer.dataClient);

            await e.setState({ //lay tu mang 1 khong co awit thi no se khong kip hien thi dau
                typedata: data.typedata,
                noidungemit: data.noidungemit,
                // testBase64: data.dataServer.dataClient,
            });
            await this.state.typedata.map(async (e2) => {
                var buffer = await Buffer1.Buffer(e2.text); //data nhan duoc la json ta chuyen ve buffer 
                var tostring = await buffer.toString(); // sau chuyen buffer ve chuoi tostring
                await e.setState({
                    //textNew: e2.text,
                    //textNew: tostring,
                    id: e2.id,
                });
                //console.log('textNew:::', this.state.textNew);
                //console.log('id:::', this.state.id);
            });
            await this.state.noidungemit.map(async (e3) => {
                var imageNewJson1 = await e3.dataImageJson;
                var convertJsonToBase64A = await new Buffer1.Buffer(imageNewJson1).toString('base64');
                await e.setState({      //setState ({ xxx: yyyy }) de sau nay muon lay da rung ta goi this.state.xxx
                    imageNewJson: imageNewJson1,
                    convertJsonToBase64: convertJsonToBase64A,
                });
                //console.log('imageNewJson:::', this.state.imageNewJson);
                //console.log('convertJsonToBase64:::::::', this.state.convertJsonToBase64);

            });

            // this.state.testBase64.map(async (e4) => { //de lay phan tu trong mang dataClient tu DATAS ta lay duoc tu DATAS.dataServer.dataClient.map(....)
            await data.dataServer.dataClient.map(async (e4) => { //de lay phan tu trong mang dataClient tu DATAS ta lay duoc tu DATAS.dataServer.dataClient.map(....)
                const dataJsonC = await e4.dataJsonC;
                var buffertext = await Buffer1.Buffer(dataJsonC); //data nhan duoc la json ta chuyen ve buffer 
                var tostringtext = await buffertext.toString(); // sau chuyen buffer ve chuoi tostring

                const dataJsonImageC = await e4.dataJsonImageC;
                //console.log('dataJsonCemit:::::::::', dataJsonC);
                //console.log('dataJsonImageCemit:::::::::', dataJsonImageC);
                const dataBaseImageC1A = new Buffer1.Buffer(dataJsonImageC).toString('base64');
                //   console.log('dataBaseImageC1A:::::::', dataBaseImageC1A);
                await e.setState({
                    testBase64: dataBaseImageC1A,
                    textNew: tostringtext,
                });
                // console.log('testBase64:::::', this.state.testBase64);
            });

            var res = await [{ text1: this.state.textNew, send1: this.state.textNew, id1: this.state.id, convertJsonToBase64_1: await this.state.convertJsonToBase64, testBase64_1: await this.state.testBase64 }];
            console.log('res:::::', res);
            await res.map(async (e7) => {
                e.setState({
                    id: e7.id1,
                    maunen: e7.text1,
                    dataJson: e7.text1,
                    text: e7.text1,
                    dataSource: await ds.cloneWithRows(res),
                    send: e7.text1,
                    refreshing: true,
                });
            });


        });
        return socketOn; //tra ve ket qua yyy
    } catch (e) {
        return e;
    }
}

export default nhanData;