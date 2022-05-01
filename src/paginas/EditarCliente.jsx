import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario"

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {

    const obtenerClienteApi = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500);

    };
    obtenerClienteApi();
  }, []);
  return (
    <>


      {cliente?.nombre ? (
        <>
          <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
          <p className='pt-3'>Utiliza este formulario para editar un cliente</p>
          <Formulario
            cliente={cliente}
            cargando={cargando}
          />
        </>
      ) : <p className="font-bold text-4xl text-red-600 uppercase">Cliente ID no valido</p>}

    </>
  )
}

export default EditarCliente
