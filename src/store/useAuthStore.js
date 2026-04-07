import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            isLoggedIn: false,
            isProfileFilled: false,
            user: null,
            token: null,

            login: (userData, token) => {
                if (token) localStorage.setItem('auth_token', token);
                set({ isLoggedIn: true, user: userData, token: token })
            },
            logout: () => {
                localStorage.removeItem('auth_token');
                set({ isLoggedIn: false, user: null });
            },

            updateProfile: (newData) => set((state) => ({
                user: { ...state.user, ...newData }
            })),

            fillProfile: () => set({ isProfileFilled: true }),
        }),
        {
            name: 'auth-storage',
        }
    )

);

export default useAuthStore;