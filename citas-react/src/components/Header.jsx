function Header(props){

    console.log(props)
    return(
        <h1 className="font-black text-4xl text-center md:w-2/3 mx-auto">
            Siguimiento Pacientes {""}
            <span className="text-indigo-600">Veterinaria</span>
            </h1>
    )
}

export default Header