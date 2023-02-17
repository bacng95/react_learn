import classnames from 'classnames'

import NovelRow from "./novelRow"

const NewUpdate = (props) => {
    
    const {
        className,
        novels
    } = props

    const renderNovelTop = () => {
        if (novels.length) {
            return novels.map((el, index) => {
                return (
                    <NovelRow key={el.id}
                    data={el}
                    className={classnames('h-100', {
                        // 'mb-2': index !== novelRecommentBanner.length - 1
                    })}
                    />
                )
            })
        }
    }

    return (
        <div className={classnames('', {
            [className]: className
        })}>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='h4 fw-bold'>Mới cập nhật</h2>
                <a className='text-primary small' href='#'>Xem thêm</a>
            </div>
            <div className='mt-3'>
                <table className='table table-striped table-borderless table-hover border-top fz-14'>
                    <tbody>
                        { renderNovelTop() }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default NewUpdate