const data = [
  {
    name: 'Prueba',
    lastName: 'Prueba',
    dni: 40554865,
  },
  {
    name: 'Ricardo',
    lastName: 'Ruben',
    dni: 40554863,
  },
  {
    name: 'Lautaro',
    lastName: 'Lopez',
    dni: 40554862,
  },
];

export default async function handler(res, req) {
	try {
		const response = await fetch('http://localhost:3000/api/data')
		const data = await response.json()
		res.status(200).json(data)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Error al obtener los datos' })
	}
}
