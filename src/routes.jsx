import Home from './pages/Home/Home'
import SingleMove from './pages/SingleMove/SingleMove'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Archive from './pages/Archive/Archive'
import Ganer from './pages/Ganer/Ganer'


const routes = [
    { path: '/', element: <Home /> },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: 'archive', element: <Archive /> },
    { path: 'singlemove/:moveID', element: <SingleMove /> },
    { path: 'ganer/:ganerID/:name', element: <Ganer /> },
]
export default routes