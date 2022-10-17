const contactos=[{
    "Id":"Seba",
    "order":3,
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
    "order":1,
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
    "order":2,
    "Nombres":"Nicolas",
    "Apellidos":"Vallejos",
    "Telefono":"955112385",
    "Ubicaciones":{
        "Ciudad":"Chillan",
        "Dirección":"octubre",
    }
},
{
    "Id":"samuelito",
    "order":0,
    "Nombres":"Samuel",
    "Apellidos":"Soto",
    "Telefono":"955112342",
    "Ubicaciones":{
        "Ciudad":"Hualpen",
        "Dirección":"tucapel",
}}]
const list=[22,23,9,3,15,6,7,27]


//FUNCION QUE ORDENA UNA LISTA
function ordenarlista(lista){
let listaordenada=[]
l=lista.length
for(let cont=0;cont<l;cont++){
    menor=lista[0]
    indicemenor=0
    for (let i= 0; i < lista.length; i++) {
        if (lista[i]<menor){
            menor=lista[i]
            indicemenor=i;
        }
    }
    listaordenada.push(menor)
    lista.splice(indicemenor,1)
}
return listaordenada;}
//console.log(ordenarlista(list));

//FUNCION QUE ORDENA UN OBJETO POR LA PROPIEDAD DADA

function ordenarobjeto(objeto,propiedad){
    let objetoordenado=[]
    l=objeto.length
    for(let cont=0;cont<l;cont++){
        menor=objeto[0][propiedad]
        indicemenor=0
        for (let i= 0; i < objeto.length; i++) {

            if (objeto[i][propiedad]<menor){
                menor=objeto[i][propiedad];
                indicemenor=i;
            }
        }
        objetoordenado.push(objeto[indicemenor])
        objeto.splice(indicemenor,1)
    }
    return(objetoordenado)}

console.log(ordenarobjeto(contactos,"order"));