class UserStorage {
    Login( id, password, onSec, onErr){
        setTimeout(()=>{
            if((id === '123' && password === '123' ) || (id === '456' && password === '456')){
                onSec(id)
            } else {
                onErr( new Error('아이디 혹은 비밀번호 를 확인 하세요.'));
            }
        },3000);
    }
    getRoles(id, onSec, onErr){
        setTimeout(()=>{
            if( id === "123" ) {
                onSec( {id: '123', name: "www", role: "admin"});
            } else {
                onErr( new Error('접근권한이 없습니다.'))
            }
        },2000);
    }
    
}

const userstorage = new UserStorage();
const id = prompt('ID : ')
const pw = prompt('PASSWORD : ')
userstorage.Login(id,pw, (user_id)=>{ 
    userstorage.getRoles(user_id, (user_detail)=>{ 
        console.log(user_detail.role)},(error)=>{console.log(error)}) 
}, (error)=>{console.log(error)})