function sum(x, y) {
    try {
        if (x(isNaN) || y(isNaN));
    } catch (error) {
        console.log(error, ' One or more arguments is not a number')

    }
    console.log(x + y);
    return x + y
}
console.log(sum(21, 23));
console.log("b" , 5 )




let userLogin =
{
    username: "robert",
    password: "1234"
};

function newLogin(user, password) {
    try {
        if (userLogin.username !== user || userLogin.password !== password)
            throw Error('Please Check your User Info and Try again, Invalid Username or Password!')
    } catch (error) {
        return error
    }
    return ` ${userLogin.username}, Has been logged in successfully`
}

console.log(newLogin('robert', '1234'));
console.log(newLogin('tom', 'mayhem'));