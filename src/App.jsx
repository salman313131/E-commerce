import './App.css'
import Store from './Store'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {path:'/',element: <Store />},
  {path:'/about',element: <About />},
  {path: '/home',element: <Home />},
  {path: '/contact',element: <Contact />}
])
function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
