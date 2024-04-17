import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Pitstop from './pages/pitstop/Pitstop';
import App from './App'
import Buscar from './pages/buscar/Buscar';
import Cadastro from './pages/cadastro/Cadastro';
const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/pitstop",
          element:<Pitstop/>
        },
        {
          path:"/buscar",
          element:<Buscar/>
        }
      ]
    },
    {
      path:"/cadastro",
      element:<Cadastro/>
    }
  ])

export default router;