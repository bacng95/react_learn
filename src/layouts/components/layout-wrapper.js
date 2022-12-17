// ** React Imports
import { Fragment, useEffect, memo } from 'react'

// ** Third Party Components
import classnames from 'classnames'

const LayoutWrapper = props => {

    // ** Props
    const { children, routeMeta } = props

    const Tag = 'div';


    // ** ComponentDidMount
    useEffect(() => {

    }, [routeMeta])

    return (
        <div
            className={classnames('app-content content overflow-hidden', {
                [routeMeta ? routeMeta.className : ''] : routeMeta && routeMeta.className,
                // 'show-overlay' : navbarStore.query.length
            })}
        >
            <div className='content-overlay'></div>
            <div className='header-navbar-shadow'></div>
            <div
                className={classnames({
                    'content-wrapper': routeMeta && !routeMeta.appLayout,
                    'content-area-wrapper': routeMeta && routeMeta.appLayout,
                })}
            >
                <Tag {...({})}>
                    {children}
                </Tag>
            </div>
        </div>
    )

}

export default memo(LayoutWrapper)