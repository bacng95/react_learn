// ** Router imports
import { lazy } from 'react'

// ** Router imports
import { useRoutes, Navigate } from 'react-router-dom'

// ** Hooks Imports
import { useLayout } from '@src/utility/hooks/useLayout'

// ** Layouts
import BlankLayout from '@src/layouts/BlankLayout'

// ** GerRoutes
import { getRoutes } from './routes'

// ** Components
const Error = lazy(() => import('@src/views/pages/Error'))


const Router = () => {

    const { layout } = useLayout()
    
    const allRoutes = getRoutes(layout)

    const getHomeRoute = () => {

        return '/'

        // const user = getUserData()
        // if (user) {
        //     return getHomeRouteForLoggeedInUser(user.role)
        // } else {
        //     return '/login'
        // }
    }

    const routes = useRoutes([
        // {
        //     path: '/',
        //     index: true,
        //     // element: <Navigate replace to={getHomeRoute()} />
        // },
        {
            path: '*',
            element: <BlankLayout/>,
            children: [
                { path: '*', element: <Error/> }
            ]
        },
        ...allRoutes
    ])
    return routes
}

export default Router