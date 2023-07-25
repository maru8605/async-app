
import Link from 'next/link';
// import { TextField, Button} from '@mui/material';
import useDataStore from '@/features/attendance/stores';
import { useState, useEffect } from 'react';
import {addStudent} from '../../firebase/client'


export default function NewStudent() {

	const [name, setName] = useState("");
	const dataStore:any = useDataStore();


	const handleChange = (event: any) => {
		const { value } = event.target;
		setName(value);
	}

	const handleSubmit = (event: any) => {
		event.preventDefault()

		//Si no hay coneccion a internet
		if (typeof navigator.onLine === "undefined" || !navigator.onLine) {
			console.log('offline')
			dataStore.addData(name)
			localStorage.setItem('alumnos', JSON.stringify(dataStore.data))
		} else {
			console.log('hay internet:', window.navigator.onLine);

			addStudent({
				content: name,
			})
			
		}

	}

  useEffect(() => {
		// Retrieve data from Zustand store and local storage
		if (typeof navigator.onLine === 'undefined' || !navigator.onLine) {
			console.log('offline useEffect')
			const formDataFromStore = dataStore.data
			const formDataFromLocalStorage = localStorage.getItem('alumnos')

			if (formDataFromStore.length === 0 && formDataFromLocalStorage) {
				dataStore.addData(JSON.parse(formDataFromLocalStorage))
			}
		}
	}, [])
	

	const handleClick = () => {
		console.log('hago click - offline')
		console.log(dataStore.data)
		// Synchronize data when there is an internet connection
		if (navigator.onLine) {
			console.log('handleClick Online:', dataStore.data)
			dataStore.data.forEach((item:any) => {
				addStudent({
					content: item.name,
				})
			})
			dataStore.clearData()
			localStorage.removeItem('alumnos')
		}
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




