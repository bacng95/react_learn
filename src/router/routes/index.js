// ** React Imports
import { Fragment } from 'react'

// ** Routes Imports
import Home from './Home';

// ** Route Components
import PublicRoute from '@src/components/routes/PublicRoute';

// ** Layouts
import BlankLayout from "@src/layouts/BlankLayout";
import DefaultLayout from "@src/layouts/DefaultLayout";

import LayoutWrapper from '@src/layouts/components/layout-wrapper'


// ** Utils
import { isObjEmpty } from '@src/utility/Utils'

const getLayout = {
    blank: <BlankLayout/>,
    default: <DefaultLayout/>
}


// ** Document title
const TemplateTitle = '%s - Truyện hay đây'

// ** Default route
const DefaultRoute = '/'


// ** Merge Routes
const Routes = [
    ...Home
]

const getRouteMeta = route => {
    if (isObjEmpty(route.element.props)) {
        if (route.meta) {
            return { routeMeta: route.meta }
        } else {
            return {}
        }
    }
}

const MergeLayoutRoutes = (layout, defaultLayout) => {
    const LayoutRoutes = []

    if (Routes) {
        Routes.filter(route => {
            let isBlank = false;

            if (
                (route.meta && route.meta.layout && route.meta.layout === layout) ||
                ((route.meta === undefined || route.meta.layout === undefined) && defaultLayout === layout )
            ) {

                let RouteTag = PublicRoute

                if (route.meta) {
                    route.meta.layout === 'blank' ? (isBlank = true) : (isBlank = false)
                }

                if (route.element) {
                    const Wrapper = 
                        isObjEmpty(route.element.props) && isBlank === false
                        ? LayoutWrapper
                        : Fragment


                    route.element = (
                        <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
                            <RouteTag route={route}>
                                {route.element}
                            </RouteTag>
                        </Wrapper>
                    )
                }

                LayoutRoutes.push(route)

            }

            return LayoutRoutes

        })
    }

    return LayoutRoutes
}


const getRoutes = layout => {
    
    const defaultLayout = layout || 'default'
    const layouts = ['default', 'blank']

    const AllRoutes = []

    layouts.forEach(layoutItem => {

        const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout)

        AllRoutes.push({
            path: '/',
            element: getLayout[layoutItem] || getLayout[defaultLayout],
            children: LayoutRoutes
        })
    })

    return AllRoutes

}

export { getRoutes, DefaultRoute, TemplateTitle, Routes }