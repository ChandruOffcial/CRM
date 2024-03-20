
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

