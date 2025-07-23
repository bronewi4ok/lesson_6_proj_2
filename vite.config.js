import react from '@vitejs/plugin-react-swc';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    // Налаштування проксі
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Адреса Express бекенду
        changeOrigin: true, // Змінюємо походження запиту на походження цільового сервера
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Переписуємо шлях (можна залишити '/api', якщо API шляхи не змінюються)
      },
    },
  },
});
