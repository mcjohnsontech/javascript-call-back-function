const introduce = (callback) =>{
    callback("Abiodun Mark", 19, "yaba")
}

introduce((name, age, address) =>{
    console.log(`${name} is ${age} years old. he lives in ${address}`)
})