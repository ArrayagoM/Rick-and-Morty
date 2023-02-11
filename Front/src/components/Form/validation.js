 const Validation = (userData) => {
let errors = {}
//si no cumple que es un email =>  error
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
errors.username = "El email es invalido";
}
if(!userData.username) {
    errors.username = "Estecampo no puede estar vacío"
}
if(userData.username.length > 35) {
    errors.username = "El email NO puede superar los 35 caracteres"
}
if(!userData.password.match(/\d/)){
    errors.password = "La contraseñe debe contener al menos un número"
}
if(userData.password.length < 6 || userData.password.length > 10 ){
    errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
}
return errors;
}




export default Validation;