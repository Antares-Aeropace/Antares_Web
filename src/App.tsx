import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/home/Home';
import Antares_ED from './pages/Antares_ED';
import Antares_Aerospace from './pages/Antares_Aerospace';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "nosotros",
      element: (<h1> Nosotros </h1>)
    },
    {
      path: "antares-aerospace",
      element: <Antares_Aerospace />
    },
    {
      path: "antares-tech",
      element: (<h1>Antares Tech</h1>)
    },
    {
      path: "antares-ed",
      element: <Antares_ED />
    },
    {
      path: "store",
      element: (<h1>Tienda antarosa</h1>)
    },
    {
      path: "contact",
      element: (<h1>Contacto antaroso</h1>)
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
