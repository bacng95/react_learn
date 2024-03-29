import { lazy } from 'react'
const Home = lazy(() => import('@src/views/pages/home'))

const HomeRoute = [
    {
        element: <Home/>,
        path: '/',
        meta: {
            appLayout: true,
            className: 'app-home'
        }
    }
]

export default HomeRoute