import React from 'react'


const Buscador = ({ data, dataFilter }) => {
    console.log(data)
    const inputHandler = (e) => {
        const BuscarPalabra = e.target.value.toLowerCase();
    
    const resultado = data.filter(
        (usuario)=> 
        usuario.nombre.toLowerCase().includes(BuscarPalabra) ||
        usuario.correo.toLowerCase().includes(BuscarPalabra) ||
        usuario.edad.includes(BuscarPalabra) ||
        usuario.cargo.toLowerCase().includes(BuscarPalabra) ||
        usuario.telefono.toLowerCase().includes(BuscarPalabra) 
    )
    dataFilter(resultado)
    };
  return (
    <div className='buscador col-12 col-md-6'>
        <input type="text" name='buscador' id='buscador' placeholder='Buscar Usuario' className='form-control-mb-3'
        onChange={inputHandler} />

    </div>
  )
}

export default Buscador