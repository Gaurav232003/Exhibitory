import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import HomePage from './pages/HomePage';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import SculptingPage from './pages/SculptingPage';
import SecondPage from './pages/SecondPage';
import ContestsPage from './pages/ContestsPage';
import Contest from './pages/Contest';
import Profile from './pages/Profile';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import VideoPage from './pages/VideoPage';
import CompetitionPage2 from './pages/CompetitionPage2';
import CHARITY from './pages/CHARITY';
import CompetitionPage3 from './pages/CompetitionPage3';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },{
    path: "/HomePage",
    element: <SecondPage/>,
    },{
      path: "/SculptingPage",
      element: <SculptingPage/>,
      },{
        path: "/Contests",
        element: <ContestsPage/>,
        },{
          path: "/Contests/CompetitionPage",
          element: <Contest/>,
          },
          {
            path: "/Profile",
            element:<Profile/>,
            },
            {
              path: "/RegistrationPage",
              element:<RegistrationPage/>,
              },
              {
                path: "/LoginPage",
                element:<LoginPage/>,
                },{
                  path: "/Contests/CompetitionPage/VideoPage",
                  element:<VideoPage/>,
                  },
                  {
                    path: "/Contests/CompetitionPage2",
                    element:<CompetitionPage2/>,
                    },
                    {
                      path: "/Contests/CompetitionPage3",
                      element:<CompetitionPage3/>,
                      },
                    {
                      path: "/CHARITY",
                      element:<CHARITY/>,
                      },
                     
                   
                    
  ]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);
