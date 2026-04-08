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
                const flatUser = userData?.data?.user || userData?.user || userData;

                const actualToken = token || userData?.data?.token;

                if (actualToken) localStorage.setItem('auth_token', actualToken);

                set({
                    isLoggedIn: true,
                    user: flatUser,
                    token: actualToken,
                    isProfileFilled: !!flatUser?.profileComplete
                });
            },

            updateProfile: (newData) => set((state) => {
                const flatUpdate = newData?.data || newData;
                return {
                    ...state,
                    user: { ...state.user, ...flatUpdate },
                    isProfileFilled: true
                };
            }),

            logout: () => {
                localStorage.removeItem('auth_token');
                set({ isLoggedIn: false, user: null, token: null, isProfileFilled: false });
            },
        }),
        { name: 'auth-storage' }
    )
);

export default useAuthStore;