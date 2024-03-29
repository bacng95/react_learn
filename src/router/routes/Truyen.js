import { lazy } from 'react'
const Truyen = lazy(() => import('@src/views/pages/truyen'))

const HomeRoute = [
    {
        element: <Truyen/>,
        path: '/truyen/:novel_slug',
        meta: {
            appLayout: true,
            className: 'app-novel'
        }
    }
]

export default HomeRoute