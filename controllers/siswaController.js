const { response } = require("express");
const { request } = require("http");

exports.getDataSiswa = (request, response) => {
    return response.json({
        message: "This function for get data siswa"
    })
}

exports.addDataSiswa = (request, response) => {
    return response.json({
        message: "This function for add data siswa"
    })
}

exports.editDataSiswa = (request, response) => {
    let id_siswa = request.params.id_siswa
    return response.json({
        message: `This function for edit data siswa with ID ${id_siswa}`
    })
}

exports.deleteDataSiswa = (request, response) => {
    let id_siswa = request.params.id_siswa
    return response.json({
        message: `This function for delete data siswa with ID ${id_siswa}`
    })
}