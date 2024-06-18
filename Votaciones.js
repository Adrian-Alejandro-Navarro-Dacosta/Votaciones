class participante{
 constructor(nombre,edad){
    this_nombre = nombre;
    this_edad = edad;
 }
}
class candidato extends participante{
    constructor(nombre,edad,votos){
        super(nombre,edad);
        this_votos = votos;
    }
}
const candidato1 = new candidato(Jose,34,2);
console,console.log(candidato.nombre);
let candidatos=[];
canddatos.push[candidato1];
const menu ="menu\n";
menu+="1.anadir_candidato\n";
menu+="2.votar_candidato\n";
menu+="3.Mostrar_Resultados\n";
menu+="4.salir";
let opcion = 0
while(opcion!=4){
    if(opcion == 1)
    {
        let nombrenuevo = prompt("introduce el nombre"," ");
        let edadnueva = prompt("introduce la edad "," ");
        let candidatonuevo = new candidato(nombrenuevo,edadnueva,0); 
    }
    if(opcion == 2)
    {
        let nombreavotar = prompt("introduce el nombre"," ");
        let bool = false;
        let cont = 0;
        while(cont < candidatos.length && bool==false){
            if(candidatos[cont].nombre == nombreavotar)
            {
                candidatos[cont].votos+=1;
                bool=true;
            }
            if(bool== false)
            {
                console.log("El nombre no existe");
            }
        }
    }
    if(opcion==3)
    {
        candidatos.forEach(valor=>console.log(valor));
    }
    if(opcion==4)
    {
        console.log("El programa va a terminar");
    }
}
