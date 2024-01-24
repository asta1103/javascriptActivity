
function checkIfUserIsLogin(){

    const loginUser = localStorage.getItem('loginUser');

    console.log(loginUser);
    
    if (loginUser !== '') {

        const loginUserObj = JSON.parse(loginUser);

        alert(loginUserObj.username + ' ' + loginUserObj.password + ' ' + loginUserObj.id);

    } else {

        alert('this is a secured page, need to login first');
        window.location.href = 'http://localhost:3000/login';

    }

}