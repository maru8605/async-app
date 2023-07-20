import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


const useUserStore = create(
	persist(
		(set) => ({
			users: [], // Aquí almacenaremos los usuarios obtenidos de Firebase
			offlineData: [], // Almacenará los datos del formulario cuando no haya conexión
			addUser: (user) => set((state) => ({ users: [...state.users, user] })),
			addOfflineData: (data) => set((state) => ({ offlineData: [...state.offlineData, data] })),
			clearOfflineData: () => set({ offlineData: [] }),
		}),
		{
			name: 'user-storage', // Nombre del ítem en el almacenamiento (debe ser único)
			storage: createJSONStorage(() => sessionStorage), // (opcional) por defecto, se usa 'localStorage'
		}
	)
)

export default useUserStore



export const useBearStore = create(
	persist(
		(set, get) => ({
			bears: 0,
			addABear: () => set({ bears: get().bears + 1 }),
		}),
		{
			name: 'food-storage', // name of the item in the storage (must be unique)
			storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
		}
	)
)