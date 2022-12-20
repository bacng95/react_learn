import classnames from 'classnames'

import './style.scss'

// ** Components import
import Views from './Views'
import Trend from './Trend'
import Vote from './Vote'

const NovelCharts = (props) => {

    const {
        className
    } = props


    return (
        <div className={classnames('', {
            [className]: className
        })}>
            <div className='row'>
                <div className='col-4'>
                    <Views/>
                </div>
                <div className='col-4'>
                    <Trend/>
                </div>
                <div className='col-4'>
                    <Vote/>
                </div>
            </div>
        </div>
    )
}

export default NovelCharts