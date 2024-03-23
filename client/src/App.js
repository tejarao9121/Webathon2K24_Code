import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Help from './components/Help'
import Root from './components/Root';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './components/Error'
import UserProfile from './components/UserProfile';
import Post from './components/Post'
import Search from './components/Search'
import Profile from './components/Profile'
import Collaboration from './components/Collaboration'




function App() {
  const x=createBrowserRouter([{
    path:'/',
    element:<Root/>,
    errorElement:<Error/>,
    children:[

      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/Login',
        element:<Login/>,  
        
      },
      {
        path:'/Register',
        element:<Register/>,
        
      },
      {
        path:'/Help',
        element:<Help/>,
        
      },
      {
        path:'/UserProfile',
        element:<UserProfile/>,
        children:[
          {
            path:'Post',
            element:<Post/>
            
          },
          {
            path:'Search',
            element:<Search/>
            
          },
          {
            path:'Profile',
            element:<Profile/>
            
          },
          {
            path:'Collaboration',
            element:<Collaboration/>
            
          },
        ]
      }
      
    ]

}
])
  return (
    <div className="App">
      <RouterProvider router={x}/>
    </div>
  );
}

export default App;
