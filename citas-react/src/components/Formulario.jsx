import {useState, useEffect} from 'react';
function Formulario() {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setemail] = useState('');
  const [fecha, setfecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  
  const [error, setError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    // Validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Campo vacio')

      setError(true)
      return;
    } 
    setError(false);
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center">
        Añade Pacientes y {" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form  
        onSubmit={handleSubmit}
        className="bg-white shadow-md m-5 rounded-lg py-10 px-5 mx-5">
          {error && (
            <div>
              <p className='bg-red-600 text-white text-center p-3 uppercase
              font-bold mb-3 rounded-md'>
                Los campos son requeridos</p>
            </div>
          )}
          {/*Label mascota */}
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota
              </label>

            <input
            id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}

            />
          </div>
          
             {/*Label Propietario */}
             <div className="mb-5">
            <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
              </label>

            <input
            id="Propietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

       {/*Label Email */}
       <div className="mb-5">
            <label htmlFor="Email" className="block text-gray-700 uppercase font-bold">
              Email
              </label>

            <input
            id="Email"
              type="email"
              placeholder="Email contacto propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          
            {/*Label Alta */}
       <div className="mb-5">
            <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
            Alta
              </label>

            <input
            id="Alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e) => setfecha(e.target.value)}
            />
          </div>

            {/*Label Alta */}
       <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
              </label>

           <textarea 
           id="sintomas"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           placeholder="Describe los sintomas."
           value={sintomas}
           onChange={(e) => setSintomas(e.target.value)}
           >
            
           </textarea>
          </div>

          <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700
          cursor-pointer transition-all"
          value="Agregar Paciente"
          />

        </form>
    </div>
  )
}

export default Formulario
