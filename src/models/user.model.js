const {randomUUID} = require('node:crypto');
const { emit } = require('node:process');

let users = [
    {
        id: randomUUID(),
        name: "Yahir",
        email: "beasmad@gamil.com",
        age: 22,
        active: true
    },

    {
        id: randomUUID(),
        name: "Mika",
        email: "mikag.30@gmail.com",
        age: 21,
        active: true
    },

    {
        id: randomUUID(),
        name: "Nina",
        email: "kovan.gmail.com",
        age: 22,
        active: false
    }
];

//Función buscar todos
function findAll(){
    return users;
}

//Función buscar por id
function findById(){
    return users.find(user => user.id === id) || null;
}

//Función agregar usuario
function addUser(item){
    const user = {
        id: randomUUID(),
        name: item.name, //atributo obligatorio
        email:item.email, //atributo obligatorio
        age: item.age,
        active: true
    }

    users.push(user)
    return user;
}

//Función actualizar usuario
function updateUser(id, data) {
    const index = users.findIndex(u => u.id === id);
    if (index === -1)
        return null;

    users[index] = {
        ...users[index], //para acceder a las propiedades del objeto original
        name: typeof data.name === "undefined" ? users[index].name : data.name,
        email: typeof data.email === "undefined" ? users[index].email : data.email,
        age: typeof data.age === "undefined" ? users[index].age : Number(data.age),
        active: typeof data.active === "undefined" ? users[index].active : Boolean(data.active)
    }

    return users[index];
}

module.exports = {findAll, findById, addUser, updateUser};