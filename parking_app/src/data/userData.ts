import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { User } from '../types/uicomponents-types'

interface UserState {
    user: User | null;
    setUser: (currentUser: User | null) => void
}

const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (currentUser: User | null) => set(() => ({ user: currentUser })),
        }),
        {
            name: 'user-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)

export default useUserStore;