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
import Rules from '../game/Rules';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
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
        }
        ,
        { path: 'ver-perfil',
          element: <VerPerfil/>
        }
      ]
    },
    {
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