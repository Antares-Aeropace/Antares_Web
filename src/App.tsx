import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Pages
import Home from './pages/home/Home';
import Nosotros from './pages/Nosotros/Nosotros'
import Antares_ED from './pages/AE/Antares_ED';

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
      element: <Antares_ED />
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
