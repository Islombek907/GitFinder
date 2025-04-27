import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  user: null,
  repos: [],
  isLoading: false,
  error: null,
  active: 'ИМЯ',
  setUser: (user) => set({ user }),
  setRepos: (repos) => set({ repos }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  setActive: (active) => set({ active }),
  fetchUserData: async (username) => {
    set({ isLoading: true, error: null, user: null, repos: [] });
    try {
      const startTime = Date.now(); // Запоминаем время начала запроса
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

      // Вычисляем, сколько времени занял запрос
      const elapsedTime = Date.now() - startTime;
      // Минимальная длительность анимации — 5 секунд (5000 мс)
      const remainingTime = 5000 - elapsedTime;

      // Если запрос занял меньше 5 секунд, ждём оставшееся время
      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }

      // После задержки обновляем данные
      set({ user: userResponse.data, repos: reposResponse.data });
    } catch (err) {
      set({ error: err.response?.data?.message || 'Ошибка загрузки данных' });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useStore;