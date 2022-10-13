let contactos=["SebastianFernandez","PabloSepulveda","SamuelSoto","NicolasVallejos","FranciscoRios"]
const añadircontacto = (contacto) =>{
    contactos.push(contacto);
    return contactos
}
console.log(añadircontacto("cesar"));



const eliminarcontacto= (contacto) =>{
    contactos=contactos.filter((item) => item!==contacto);
    return contactos
}
console.log(eliminarcontacto("cesar"));



const vercontactos= (contactos) =>{
    contactos.forEach(element => {
        console.log(element);
    });
}
vercontactos(contactos)

