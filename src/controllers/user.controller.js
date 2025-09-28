const User = require('../models/user.model');

findAll = (req, res) => {
    const data = User.findAll();
    res.status(200).json(data); //Devolver estado 200 OK
}

findById = (req, res) => {
    const data = User.findById(req.params.id);

    if (!data) return res.status(404).json({message: "Usuario no encontrado"});
    res.status(200).json(data);
}

addUser = (req, res) => {
    const newUser = User.addUser(req.body);

    res.status(201).json(newUser); //Se devuelve el estado 201, creado 
}

updateUser = (req, res) => {
    const updateUs = User.updateUser(req.params.id, req.body);

    if(!updateUs) return res.status.json({message: "Usuario no encontrado"});
    res.status(200).json({message: "Se actualizo el usuario", user: updateUs});
}

module.exports = {findAll, findById, addUser, updateUser};