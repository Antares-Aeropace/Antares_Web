import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "Nosotros",
      element: (<h1>Hola Mundo</h1>)
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
