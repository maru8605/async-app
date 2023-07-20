import React from 'react'
import useUserStore from '../path/to/store'

const SendDataButton = () => {
	const offlineData = useUserStore((state) => state.offlineData)
	const clearOfflineData = useUserStore((state) => state.clearOfflineData)

	const handleSendData = () => {

  sendOfflineDataToFirebase(offlineData).then(() => clearOfflineData());
	}

	return (
		<div>
			{offlineData.length > 0 && <button onClick={handleSendData}>Enviar datos almacenados</button>}
		</div>
	)
}

export default SendDataButton
function sendOfflineDataToFirebase(offlineData: any) {
  throw new Error('Function not implemented.')
}

