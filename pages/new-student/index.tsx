
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

	const handleClick = () => {
		console.log('desde click')
	}

  return (
		<>
			<main>
				<h2>Nuevo alumno</h2>
				<Link href='/'>Inicio</Link>

				<div className='form-container'>
					<h2>formulario</h2>
					<form action='' onSubmit={handleSubmit}>
						<label htmlFor="">nombre y apellido</label>
						<input type="text" onChange={handleChange} />
						

						<button >Cargar Alumno</button>

					</form>

					<div>
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




