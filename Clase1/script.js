/*EN EC5*/
var userName='Hello world!'
var messaje = 'hey'+ userName + 'Welcome'
/*EN EC6*/
let userName = 'Hello world'
let messaje = `hey ${userName} welcome`

/*CONST*/
const Pi=3.141593
//las constantes no podran ser redefinidas luego

//VAR Y LET se diferencian en el alcance o scope que tiene cada una
function helloworld(){
    for(var x=0;x<2;x++){
        //tiene un alcance a la funcion
        //accesible aca
    }
    //accesible aca
    console.log(x);
}

function helloworld(){
    for(let x=0;x<2;x++){
        //tiene un alcance en este bloque de for
        //accesible aca
    }
    //aca ya no tiene alcance
    console.log(x);//undefined
}

//FUNCION ARROW
//EC5
const add = function(num){//se aplica llave si tengo mas de una sentencia
    return num+1
}

//EC6
const add2 = (num)=>{
    return num+num
}
//en caso de que sea una unica sentencia
const add3 = (num) =>num+num
//si recibe un  unico parametro
const add4 = num =>num+num
//si no recibe parametros
const add5 = ()=>num+num

//DECONSTUCTOR
//Objeto
const direccion ={
    calle:'Avenida Siempre Viva 123',
    ciudad:'Springfield',
    pais:'EEUU'
}
//EC5
var calle = direccion.calle
var cuidad = direccion.ciudad
var pais = direccion.pais
//EC6
const{calle,cuidad,pais}=direccion

//si seria un arreglo
//EC5
var values = ['Hello','World'];
var primer= values[0]
var segundo=values[1]
//EC6
const[primero,segundo]=values

//Valores por defecto
//EC5
function getEstudiante(nombre, edad){
    edad=(typeof edad !=='undefined')?edad :18
}
//EC6
function getEstudiante(nombre, edad=18){
    //cuerpo de la funcion...
}

//SPREAD propaga los elementos de un arreglo
function getSum(x,y,z){
    console.log(x+y+x);
}
let sumArray = [10,20,30]
getSum(...sumArray)
//concatenar 2 arrays
var a =[1,2]
var b = [3,4]
var c = [...a,...b]
//usar spread en objetos
let alumno = {
    nombre:'Juan',
    apellido:'Perez'
}
let cursoAlumno={...alumno,{curso :'php'}}