import classnames from 'classnames'

// ** Components import
import Views from './Views'

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
                    <Views/>
                </div>
                <div className='col-4'>
                    <Views/>
                </div>
            </div>
        </div>
    )
}

export default NovelCharts