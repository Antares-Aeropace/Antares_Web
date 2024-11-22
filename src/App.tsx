import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/home/Home';
import Antares_ED from './pages/Antares_ED';

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
      element: (<h1>Antares Aerospace</h1>)
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
