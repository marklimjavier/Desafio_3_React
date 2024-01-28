import { useState } from "react";

//no le voy a mentir profe, antes no tenia ni idea de que provocaba el error "(lo que sea que ponga) is not a function"
//antes aunque la tenia como parametro a veces pasaba y al hacer cambios de repente no pasaba, luego encontre que es
//facil solucionar cuando no se encuentra como funcion, ahora, cuando dice"(lo que sea que pongo) is not define"
//se me sale el chino mandarin polaco ingles y me pongo a inventar como loco aunque me he dado cuenta que cuando se
//el error recae en function recae dentro del componente y cuando is not define recae en la raiz y por alguna razon se soluciona
//cuando realizo el codigo de cero, aunque al volver a recolocar algunas partes puedo ver que los parametros no estan
//bien colocados, a veces los reconoce a veces no, creo que porque mi pc es loca y quiere gobernar al mundo comenzando
//por fastidiarme porque el anterior desafio si lo tuve bueno pero me puse a inventar mucho y lo estropee, ahora tengo
//una solucion distinta que me pudo haber salvado en el anterior
const Datos = ({ setError, setData }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const validarDatos = (e) => {
    e.preventDefault();

    const { nombre, correo, edad, cargo, telefono } = formData;
    const validarDatos = !nombre || !correo || !edad || !cargo || !telefono;

    validarDatos
      ? setError({
          error: true,
          msg: "Completa todos los campos !",
          color: "warning",
        })
      : setError({
          error: false,
          msg: "Cuenta creada exitosamente !",
          color: "success",
        });

    setData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1, // cortesia de la antigua actividad de agregar y borrar tareas con ayuda de internet
        nombre,
        correo,
        edad,
        cargo,
        telefono,
      },
    ]);
    setFormData({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="formulario" onSubmit={(e) => validarDatos(e)}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.nombre}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            name="correo"
            className="form-control"
            placeholder="email@ejemplo.com"
            onChange={handleChange}
            value={formData.correo}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="edad"
            className="form-control"
            placeholder="Edad"
            onChange={handleChange}
            value={formData.edad}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="cargo"
            className="form-control"
            placeholder="Cargo"
            onChange={handleChange}
            value={formData.cargo}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="telefono"
            className="form-control"
            placeholder="Telefono"
            onChange={handleChange}
            value={formData.telefono}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};
export default Datos;
