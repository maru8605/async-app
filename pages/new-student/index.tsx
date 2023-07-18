
import Link from 'next/link';
import { TextField, Button} from '@mui/material';
import { useState } from 'react';
import {addStudent} from '../../firebase/client'

export default function NewStudent() {

	const [name, setName] = useState("");

	const handleChange = (event:any) => {
		const { value } = event.target;
		setName(value);
		console.log(value)
	}

	const handleSubmit = (event:any) => {
		event.preventDefault()
		console.log('first')
		addStudent({
			content: name
		})
	}

  return (
		<>
			<main>
				<h2>Nuevo alumno</h2>
				<Link href='/'>Inicio</Link>

				<div className='form-container'>
					<h2>formulario</h2>
					<form action='' onSubmit={handleSubmit}>
						<TextField
							onChange={handleChange}
							margin='normal'
							fullWidth
							id='outlined-basic'
							label='Nombre y Apellido'
							variant='outlined'
							value={name}
						/>

						<button >Cargar Alumno</button>

					</form>
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
						color: red;
					}
					.input {
						margin-top: 10px;
					}
					.form-container {
						margin: 10px;
					}
				`}</style>
			</main>
		</>
	)
}




// const FormComponent = () => {
// 	const { formData, setFormData, isOffline, saveOfflineData } = useFormState()

// 	const handleInputChange = (event) => {
// 		const { name, value } = event.target
// 		setFormData({ [name]: value })
// 	}

// 	const handleSubmit = (event) => {
// 		event.preventDefault()
// 		// Aquí puedes implementar la lógica para enviar los datos al servidor
// 		// Puedes usar fetch, axios, o la librería de tu elección

// 		if (navigator.onLine) {
// 			// Si hay conexión, envía los datos
// 			sendFormDataToServer(formData)
// 		} else {
// 			// Si no hay conexión, guarda los datos en el almacenamiento local
// 			saveOfflineData()
// 		}
// 	}

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input type='text' name='name' value={formData.name || ''} onChange={handleInputChange} />
// 			<input type='email' name='email' value={formData.email || ''} onChange={handleInputChange} />
// 			<button type='submit' disabled={isOffline}>
// 				Enviar
// 			</button>
// 			{isOffline && (
// 				<span>
// 					Estás desconectado. Los datos se guardarán y se enviarán cuando recuperes la conexión.
// 				</span>
// 			)}
// 		</form>
// 	)
// }


