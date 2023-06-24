import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import AboutTeam from '../pages/AboutTeam/AboutTeam';
import Principal from '../pages/Principal/Principal';
import VerPerfil from '../pages/VerPerfil/VerPerfil';
import Layout from '../pages/Layout';
import Rules from '../game/Rules/Rules';
import Login from '../profile/Login';
import UserCheck from '../protected/UserCheck';
import AdminCheck from '../protected/AdminCheck';
import Signup from '../profile/Sign_up';
import LogoutButton from '../profile/Logout';
import VistaJuego from '../game/VistaJuego/VistaJuego';
import Sala_creada from '../pages/Salas/Sala_creada';
import Crear_sala from '../pages/Salas/Crear_sala';
import Sala from '../pages/Salas/Sala';


function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        },
        {
          path: 'about-team',
          element: <AboutTeam />
        },
        {
          path: 'principal',
          element: <Principal/>
        },
        { path: 'reglas',
          element: <Rules/>
        }, 
        { path: 'ver-perfil',
          element: <VerPerfil/>
        },
        { path: '/principal/sala',
          element: <Sala/>
        },
        { path: '/principal/sala/sala_creada',
          element: <Sala_creada/>
        }
        ,
        { path: '/principal/sala/crear_sala',
          element: <Crear_sala/>
        }
      ]
    },{
      path: '/login',
      element: <Login/>
    },
    {
      path: '/usercheck',
      element: <UserCheck/>
    },
    {
      path: '/admincheck',
      element: <AdminCheck/>
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/logout',
      element: <LogoutButton/>
    },
    {
      path: '/game/',
      element: <VistaJuego/>
    },{
      path: '*', 
      loader: () => {
        return redirect('/')
      }
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default Router;