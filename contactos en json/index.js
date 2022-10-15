const contactos=[{
    "Id":"Seba",
    "Nombres":"Sebastian",
    "Apellidos":"Fernandez",
    "Telefono":"955146685",
    "Ubicaciones":{
        "Ciudad":"Curanilahue",
        "Dirección":"Psj10 #80",
    }
},
{
    "Id":"Pablowo",
    "Nombres":"Pablo",
    "Apellidos":"Sepulveda",
    "Telefono":"955146685",
    "Ubicaciones":{
        "Ciudad":"San Carlos",
        "Dirección":"noviembre",
    }
},
{
    "Id":"buebito",
    "Nombres":"Nicolas",
    "Apellidos":"Vallejos",
    "Telefono":"955112385",
    "Ubicaciones":{
        "Ciudad":"Chillan",
        "Dirección":"octubre",
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

function crearcontacto(){
    var id=prompt("ingrese Id:");
    var nombres=prompt("ingrese Nombres");
    var apellidos=prompt("ingrese Apellidos");
    var telefono=prompt("ingrese Telefono:")
    var nuevadireccion = new dondevive(prompt("ingrese Ciudad:"),prompt("ingrese Dirección"));
    var nuevocontacto = new nuevomiembroobj(id,nombres,apellidos,telefono,nuevadireccion);
    return nuevocontacto
}


function actualizarcontacto(lista){
    idcontacto=prompt("Ingrese id de contacto a actualizar")
    elementIndex= lista.findIndex((obj => obj.Id ==idcontacto));
    while (elementIndex==-1){
        idcontacto=prompt("id no encontrada, ingrese nuevamente")
        elementIndex= lista.findIndex((obj => obj.Id ==idcontacto));
    }
    lista[elementIndex]=crearcontacto()
    return lista
}

actualizarcontacto(contactos);

console.log(contactos);
console.log(JSON.stringify(contactos));
