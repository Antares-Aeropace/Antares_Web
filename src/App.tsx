import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Pages
import Home from './pages/home/Home';
import Nosotros from './pages/Nosotros/Nosotros'
import AntaresED from './pages/AED/AntaresED';
import Antares_Aerospace from './pages/AA/Antares_Aerospace';
import AntaresTech from './pages/AT/AntaresTech';

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
      element: (<AntaresTech />)
    },
    {
      path: "antares-ed",
      element: <AntaresED />
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
