import react from 'react';
//Las funciones deben empezar con mayúscula (Saludar), las var y const deben empezar con minúscula (saludarFn).
export default function Saludar(props){
    const  { user, saludarFn } = props;
    const { name = 'anonimo', age } = user
    console.log(props);
    return (
        <div>
            <button onClick={() => saludarFn(name, age)}>Saludar</button>
        </div>
    );
}