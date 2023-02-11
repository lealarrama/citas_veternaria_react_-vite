import {useState, useEffect} from 'react';
import Error from './Error';


//aplicamos desctructuring y extraemos SetPacientes
const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
      if(Object.keys(pacientes).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      }
  },[paciente])

  const generarId = () =>{
    const random = Math.random().toString(36).substr(2);    ;
    const fecha = Date.now();
    return random + fecha 
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validacion del Formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay al menos un campo vacio')

      setError(true)
      return;
    }
    setError(false)

      //const Objeto de Pacientes
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }

      if(paciente.id){
        //Editando registro
        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
        paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados)
        setPaciente({})

      }else{
        // nuevo registro
        // toma una copia de pacientes y la agrega un 
        //nuevo elemento al arreglo objeto pacientes
        objetoPaciente.id = generarId(); //antes de almacenarlo en state
        //genero el id
        setPacientes([...pacientes, objetoPaciente]);

      }

      // reiniciar formulario
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
    
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">
        Adminístralos</span>
      </p>
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg mx-5 py-10 px-5 mb-10"
      >
        {/* // si es error es true imprime lo siguiente*/}
        {error && <Error mensaje='Todos los campos son obligatorios '
        
      
        />}
       
        <div className= "mb-5">
          <label htmlFor="mascosta" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input
            id="mascosta"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)} //Evento de React
          />
        </div>

        <div className= "mb-5">
          <label htmlFor="porpietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input
            id="porpietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}          
          />
        </div>
        
        <div className= "mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className= "mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}          
          />
        </div>

        <div className= "mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase
          font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? "Editar Paciente" : "Agregar paciente"}

        />



      </form>
    
    </div>
  )
}

export default Formulario
