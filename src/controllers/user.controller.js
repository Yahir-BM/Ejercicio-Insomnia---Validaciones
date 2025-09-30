const User = require('../models/user.model');

findAll = (req, res) => {
    const data = User.findAll();
    if (!data || data.length === 0) {
        return res.status(200).json({message: "No hay usuarios registrados"})
    }
    res.status(200).json(data); //Devolver estado 200 OK
}

findById = (req, res) => {
    const data = User.findById(req.params.id);
    if (!data) return res.status(404).json({message: "Usuario no encontrado"}); //Se devuelve al estado 404 no encontrado
    res.status(200).json(data);
}

addUser = (req, res) => {
    const { name, email} = req.body
    //Validar que se añade el nombre y el correo 
    if (!name || !email) {
        return res.status(400).json({message: "El nombre y el email son obligatorios"});
    }

    //Validar la estructura del correo
    const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal.test(email)) {
        return res.status(400).json({message: "Formato de email no válido"});
    }


    const newUser = User.addUser(req.body);
    res.status(201).json(newUser); //Se devuelve el estado 201, creado 
}

updateUser = (req, res) => {
    const updateUs = User.updateUser(req.params.id, req.body);

    if(!updateUs) return res.status.json({message: "Usuario no encontrado"});
    res.status(200).json({message: "Se actualizo el usuario", user: updateUs});
}

module.exports = {findAll, findById, addUser, updateUser};

