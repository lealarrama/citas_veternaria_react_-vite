import {useEffect, useState} from 'react'
import Header from "./components/Heder"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState ([])
  //boton Editar
  const[paciente, setPaciente]= useState({});

  useEffect(()=>{
    const obtnerLS = ()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtnerLS();
  },[])

//Local Storage

useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
},[pacientes])




  const eliminarPaciente = (id) => {
    const pacientesActulizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActulizados)
  }
// no muta el estado original, retorna uno nuevo.

  return (
    <div className="container mx-auto mt-28">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario
        // props y extraemos las propiedades en formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
