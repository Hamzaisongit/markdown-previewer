import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Previewer } from './Components/Previewer.jsx';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Provider } from "./Context/Provider";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {
        path: '/Previewer',
        element: <Previewer></Previewer>
    }
])


createRoot(document.getElementById('root')).render(
    <Provider>
<RouterProvider router={router}></RouterProvider>
    </Provider>
)
