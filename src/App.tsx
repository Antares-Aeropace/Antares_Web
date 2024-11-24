import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Pages
import Home from './pages/home/Home';
import Antares_ED from './pages/AE/Antares_ED';
import Nosotros from './pages/Nosotros/Nosotros';
import Antares_Aerospace from './pages/AA/Antares_Aerospace';

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
      path: "contact",
      element: (<h1>Contacto antaroso</h1>)
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
