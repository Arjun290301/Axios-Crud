import Create from '../Components/Create'
import Dashboard from '../Components/Dashboard'
import Home from '../Components/Home'
import View from '../Components/View'
import Edit from '../Components/Edit'
import Topbar from '../Components/Topbar'
import { Navigate } from 'react-router-dom'
const AppRouter = [
    {
        path: '/',
        element: <> <Topbar /><Home /></>
    },
    {
        path: '/dashboard',
        element: <> <Topbar /><Dashboard /></>
    },
    {
        path: '/create',
        element: <> <Topbar /><Create /></>
    },
    {
        path: '/view/:id',
        element: <> <Topbar /><View /></>
    },
    {
        path: '/*',
        element: <Navigate to='/' />
    },
    {
        path: '/edit',
        element: <Navigate to='/' />
    }
]
export default AppRouter