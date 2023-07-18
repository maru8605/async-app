import create from 'zustand'

const useFormState = create((set) => ({
	formData: {},
	isOffline: !navigator.onLine, // Verifica si el navegador está offline
	offlineData: localStorage.getItem('offlineData') || [],

	setFormData: (data) =>
		set((state) => ({
			formData: { ...state.formData, ...data },
		})),

	setIsOffline: (value) =>
		set(() => ({
			isOffline: value,
		})),

	saveOfflineData: () => {
		const { formData, offlineData } = get()
		const updatedData = [...offlineData, formData]
		localStorage.setItem('offlineData', JSON.stringify(updatedData))
		set(() => ({ formData: {} }))
	},

	clearOfflineData: () => {
		localStorage.removeItem('offlineData')
		set(() => ({ offlineData: [] }))
	},
}))

export default useFormState
