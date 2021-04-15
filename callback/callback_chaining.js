// () => { } 면 return 생략 불가
// () => 한줄식이면 { return } 생략 가능

const getStart = ()=> {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>resolve(`1`),1500);
    });
}
const getFirst = (one)=> 
    new Promise((resolve,reject)=> {
        //setTimeout(()=>resolve(`${one} => 2`),1500);
        setTimeout(()=>reject(new Error(`"${one} -> 2"`)),1500);
    })

const getSecond = (two)=> 
    new Promise((resolve,reject)=> {
        setTimeout(()=>resolve(`${two} -> Last`),1500);
    });


getStart().then(getFirst)
    .catch(error => {return `${error} 를 First 로 대체`; })
    //중간에 catch 구문을 써서 대체 코드를 적어서 '에러 핸들링' 할 수 있음
    
    .then(getSecond)
    .then(console.log)
    
    .catch(console.log);
    // reject 가 하나라도 있다면 catch 구문을 사용해서 처리 해주어야,
    // Uncaught Error 가 안뜨고 직접 정의한 error 메세지가 뜸
