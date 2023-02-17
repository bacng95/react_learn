import classnames from 'classnames'
import NovelHorizontalType2 from '@src/components/novel/NovelHorizontalType2'

import { arrayPagination } from '@src/utility/Utils'

const Recommend = (props) => {

    const {
        className,
        novels
    } = props


    const NovelRender = () => {
        return novels.map((el, index) => {
            return (
                <div
                    className='col-6 col-lg-4 mb-3'
                    key={index}
                >
                    <NovelHorizontalType2
                        novel={el}
                    />
                </div>
            )
        })
    }
    
    return (
        <div className={classnames('', {
            [className]: className
        })}>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='h4 fw-bold'>Biên tập viên đề cử</h2>
                <a className='text-primary small' href='#'>Xem thêm</a>
            </div>
            <div className='mt-3'>
                <div className='row'>
                    { NovelRender() }
                </div>
            </div>
        </div>
    )
}


export default Recommend