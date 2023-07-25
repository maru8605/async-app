'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'
import { getStudent } from '@/firebase/client'


export default function Home() {
  const [student, setStudents] = useState([])

  useEffect(() => {
    console.log('useEffect')
    // Utiliza la función asincrónica getStudent para obtener los datos
    const fetchData = async () => {
      try {
        const studentsData = await getStudent()
        setStudents(studentsData)
        console.log(student[1])
        
      } catch (error) {
        console.error('Error fetching students:', error)
      }
    }

    fetchData()
    
  }, [])
 
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lista de estudiantes</h1>
        <Link href='/new-student' className={styles.link }>Nuevo estudiante +</Link>
      </div>
			
			<div>
				<div>
					<h1>Datos desde la API:</h1>
					<ul>
            {student.map(item => (
              <li key={item.id}> {item.content }</li>
            ))}
						
					</ul>
        </div>
        
        
			</div>
		</main>
	)
}


