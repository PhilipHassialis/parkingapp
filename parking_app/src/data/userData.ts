import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { User } from '../types/uicomponents-types'

interface UserState {
    user: User | null;
    setUser: (currentUser: User) => void
}

const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            user: null,
            setUser: (currentUser: User) => set((state) => ({ user: currentUser })),
        }),
        {
            name: 'user-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)

export default useUserStore;