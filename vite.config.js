import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      "/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING": "https://www.swiggy.com/dapi/restaurants/list",

      "/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=": "https://www.swiggy.com/dapi/menu",
    },

  },
  plugins: [react()],
})
