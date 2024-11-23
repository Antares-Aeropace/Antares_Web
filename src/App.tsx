import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Pages
import Home from './pages/home/Home';
import Nosotros from './pages/Nosotros/Nosotros';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "nosotros",
      element: (<Nosotros />)
    },
    {
      path: "antares-aerospace",
      element: (<h1>Antares Aerospace</h1>)
    },
    {
      path: "antares-tech",
      element: (<h1>Antares Tech</h1>)
    },
    {
      path: "antares-ed",
      element: (<h1>Antares ED</h1>)
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
