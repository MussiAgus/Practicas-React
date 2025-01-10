import PropTypes from "prop-types";

export const Practica=({user, password})=>{
    return(<>
        <h1>Hola {user}</h1>
        <h1>Su contraseña es: {password}</h1>
        </>
        );
}

Practica.propTypes={
    user: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}


//Practica.defaultProps={
//    user:"Invitado",
//    password:"NaN",
//};

