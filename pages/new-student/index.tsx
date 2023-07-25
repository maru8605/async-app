
import Link from 'next/link';
// import { TextField, Button} from '@mui/material';
import {useStore} from 'zustand'
import { useState, useEffect } from 'react';
import {addStudent} from '../../firebase/client'


export default function NewStudent() {

	const store = useStore(() => ({
		data: [],
	}),
		
	);

	const [name, setName] = useState("");

	const handleChange = (event: any) => {
		const { value } = event.target;
		setName(value);
		console.log(value)

	}

	const handleSubmit = (event: any) => {
		event.preventDefault()

		//Si no hay coneccion a internet
		if (typeof navigator.onLine === "undefined" || !navigator.onLine) {

			localStorage.setItem("alumno:", JSON.stringify(name));

			console.log('localStorage.getItem:', localStorage.setItem)	
			console.log('guardar:', JSON.stringify(name))
		} else {
			console.log('hay internet:', window.navigator.onLine);

			addStudent({
				content: name,
			})
			
		}

	}

	useEffect(() => {
		const nombre = localStorage.getItem('alumno')
		console.log('alumno effect:', nombre)
		if (typeof navigator.onLine === "undefined" || !navigator.onLine) {
			const formDataFromLocalStorage = localStorage.getItem("alumno");

			if (formDataFromLocalStorage) {
        setName(JSON.parse(formDataFromLocalStorage));
      }
		}
	}, [])
	

	const handleClick = () => {
		console.log('desde click')

		// obtener los datos de local
		// enviar los datos
		//borrar los datos 
		//redirigir a vista alumnos 
	}

  return (
		<>
			<main>
				<h2>Nuevo alumno</h2>
				<Link href='/'>Inicio</Link>

				<div className='form-container'>
					<h2>formulario</h2>
					<form action='' onSubmit={handleSubmit} className='form'>
						<label htmlFor="">nombre y apellido</label>
						<input className='input' type="text" onChange={handleChange} />
						

						<button className='form-button'>Cargar Alumno</button>

					</form>

					<div className='sincronizar'>
						<button onClick={handleClick}>Sincronizar</button>
					</div>
				</div>
				<style jsx>{`
					main {
						display: flex;
						flex-direction: column;
						align-items: center;
						padding: 6rem;
						min-height: 100vh;
						color: black;
					}
					h2 {
						color: #191919;
					}
					.input {
						margin-top: 10px;
					}
					.form-container {
						margin: 10px;
						display:flex;
						flex-direction: column;
						width: 50%
					}
					.form{
						display: flex;
						flex-direction: column;
					}
					.form-button{
						margin-top: 20px
					}
					.input{
						margin-top: 16px
					}
					.sincronizar{
						margin-top: 50px
					}
				`}</style>
			</main>
		</>
	)
}




