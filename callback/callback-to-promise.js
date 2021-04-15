class UserStorage {
    Login(id, password) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if ((id === '123' && password === '123') || (id === '456' && password === '456')) {
                    resolve(id)
                } else {
                    reject(new Error('아이디 혹은 비밀번호 를 확인 하세요.'))
                }
            }, 3000);
        })
    }
    getRoles(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id === "123") {
                    resolve({ id: '123', name: "www", role: "admin" })
                } else {
                    reject(new Error('접근권한이 없습니다.'))
                }
            }, 2000);
        })
    }
}

const userstorage = new UserStorage();
const id = prompt('ID : ')
const pw = prompt('PASSWORD : ')
userstorage
    .Login(id, pw)

    //.then(userstorage.getRoles);
    .then(id => userstorage.getRoles(id))

    .then((user) => { console.log(user.role) })

    //.catch(console.log);
    .catch(error => console.log(error))