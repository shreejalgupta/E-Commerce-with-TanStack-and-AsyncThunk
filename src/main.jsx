import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

import AppRoutes from './routes/AppRoutes.jsx'
import { ToastContainer } from 'react-toastify'
import { store } from './app/store.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AppRoutes />
        <ToastContainer />
    </Provider>
)
