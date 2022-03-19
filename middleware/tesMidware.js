exports.midware1 = (request, response, next) => {
    let message = `ngapain hayooo`
    console.log(message);
    next()
}

exports.midware2 = (request, response, next) => {
    let message = `P`
    console.log(message);
    next()
}