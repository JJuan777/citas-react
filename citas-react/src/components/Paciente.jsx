import React from 'react'

const Paciente = () => {
  return (
    <div>
             <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl"> 
        <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {""}
           <span className="font-normal normal-case">Tobiyo</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {""}
           <span className="font-normal normal-case">Juan</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Correo: {""}
           <span className="font-normal normal-case">Correo@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {""}
           <span className="font-normal normal-case">06 de Marzo del 2024</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {""}
           <span className="font-normal normal-case">Le dan Vales</span>
        </p>
        </div>
    </div>
  )
}

export default Paciente
