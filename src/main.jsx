import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from "./routes/index.jsx"
import { RouterProvider } from 'react-router-dom'
import axios from 'axios';
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
