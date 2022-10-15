const contactos=[{
    "id":"Seba",
    "Nombres":"Sebastian",
    "Apellidos":"Fernandez",
    "Telefono":"955146685",
    "Ubicaciones":{
        "Ciudad":"Curanilahue",
        "Dirección":"Psj10 #80",
    }
}]

function nuevomiembroobj(Id,Nombres,Apellidos,Telefono,Ubicaciones){
    this.Id = Id;
    this.Nombres = Nombres;
    this.Apellidos = Apellidos;
    this.Telefono = Telefono;
    this.Ubicaciones = Ubicaciones;
}

function dondevive(Ciudad,Direccion){
    this.Ciudad = Ciudad;
    this.Direccion = Direccion;
}

function añadircontacto(lista){
    var id=prompt("ingrese Id:");
    var nombres=prompt("ingrese Nombres");
    var apellidos=prompt("ingrese Apellidos");
    var telefono=prompt("ingrese Telefono:")
    var nuevadireccion = new dondevive(prompt("ingrese Ciudad:"),prompt("ingrese Dirección"));
    var nuevocontacto = new nuevomiembroobj(id,nombres,apellidos,telefono,nuevadireccion);
    lista.push(nuevocontacto)
    return lista
}

for (let i = 0; i < 2; i++) {
    añadircontacto(contactos);
}

console.log(contactos);
console.log(JSON.stringify(contactos))
