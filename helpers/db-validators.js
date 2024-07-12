const Role = require("../models/role");
const Usuario=require("../models/usuario");

const esRolValido= async (rol=" ") => {
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        throw new Error(` el rol ${rol} no esta registrado en la base de datos`)
    }
}


const emailExiste = async(correo)=>{
    const emailPrueba= await Usuario.findOne({correo});
    if (emailPrueba) {
        throw new Error(` el correo:  ${correo} ya esta registrado en la base de datos`)
    }
}

const existeUsuarioPorId = async(id)=>{
    const existeUsuario= await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(` el id:  ${id} no existe`);
    }
}

module.exports={esRolValido,emailExiste,existeUsuarioPorId};