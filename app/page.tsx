'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'

export default function Home() {
  

  return (
		<main className={styles.main}>
			<h1 className={styles.title}>home</h1>
			<Link href='/new-student'>Nuevo estudiante</Link>
			<div>
				<div>
					<h1>Datos desde la API:</h1>
					<ul>
					
              <li >alumno </li>
					
					</ul>
				</div>
			</div>
		</main>
	)
}


