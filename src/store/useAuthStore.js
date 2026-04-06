import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            isLoggedIn: false,
            user: null,

            login: (userData) => set({ isLoggedIn: true, user: userData }),
            logout: () => {
                localStorage.removeItem('auth_token');
                set({ isLoggedIn: false, user: null });
            },

            updateProfile: (newData) => set((state) => ({
                user: { ...state.user, ...newData }
            }))
        }),
        {
            name: 'auth-storage',
        }
    )

);

export default useAuthStore;