function coffee(sec){
    console.log('1) in coffee')
    water('2) coffee',1)
    //setTimeout(()=>{console.log('3) 5초대기',sec)},2000);
    water('4) coffee',2)
    //await juice2().then(()=>{console.log('111111')}).catch((err)=>{console.log(err)});
    juice2().then(()=>{console.log("ddd")})
        
    return '7) coffee 끝'

}
function juice() {
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{ resolve(console.log('5) 5초대기 juice'))},2000);
    })
}

function juice2() { 
    //setTimeout(()=>{ console.log('5) 5초대기 juice')},2000);

    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{ resolve(console.log('5) 5초대기 juice'))},2000);
    })
}

function water(s,i) {
    console.log(`${s}-water: ${i}`)
}
 function init(){
    //const i = coffee("coffee").then((res)=>{console.log('8) : ',res)});
    //const i = coffee("coffee").then(()=>{console.log('last 1)', i);});
    let i='';
    //coffee("coffee").then((res=>i=res)).then(()=>{console.log('last 2)', i)});
    coffee("coffee")
    console.log('last 2)', i);
}

function delay(sec){
    console.log(new Date().toISOString())
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(console.log(new Date().toISOString()))
        },sec *1000);
    });

    //promise 를 리턴하지 않고 바로 리턴하면 다음 함수의 다음 구문이 기다리지 않고 먼저 나옴
    // return setTimeout(()=>{
    //     console.log(new Date().toISOString())
    // },sec *1000);
}
async function myAsync(){
    await delay(2);
    return 'async';
}


// myAsync().then((res)=>{
//     console.log('last',res)
// })

init()