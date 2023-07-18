import firebase from 'firebase/compat/app'
// Required for side-effects
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc } from 'firebase/firestore' 

// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app'
import { Content } from 'next/font/google'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDIN_pOHsl3oIeQ-48UTufpL9OgmX76pFg',
	authDomain: 'asyncdata-app.firebaseapp.com',
	projectId: 'asyncdata-app',
	storageBucket: 'asyncdata-app.appspot.com',
	messagingSenderId: '205823368079',
	appId: '1:205823368079:web:3ef1d6c2bfe446c78849fa',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

// export const addStudent = ({ content }) => {

// 	console.log('envio ')

// 	return addDoc(collection(db, 'alumno'), {
// 		content,
// 		createdAt: new Date(),
// 	})
// }

export const addStudent = ({ content }) =>  {
	console.log('nombre:', content)

	return addDoc(collection(db, 'alumnos'), {
		content,
		createdAt: new Date()
	})
}

export const getStudent = () => {
	return console.log('obtener estudiante')
}






