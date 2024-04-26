//metodo que nos permite crear elementos dentro de React
const e = React.createElement
//Componente react
const Button=()=> e("button",{onClick:()=>alert("Has hecho click!")},"Haz Click!")
//seleccionamos el div dentro de nuestro index.html
const domContainer = document.querySelector("#button_container")
//llamamos al metodo de React que crea la base para poder utilizar la libreria dentro de nuestro div
const root = ReactDOM.createRoot(domContainer)
//con el metodo render vamos a mostrar el componente Button
root.render(e(Button))