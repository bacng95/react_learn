import classnames from 'classnames'

// ** feather import
import { Book, User } from 'react-feather'

const Views = (props) => {

    const {
        className,
    } = props


    return (
        <div className={classnames('shadow rounded bg-white p-3', {
            [className]: className
        })}>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='h4 fw-bold'>Mới cập nhật</h2>
                <a className='text-primary small' href='#'>Xem thêm</a>
            </div>
            <ul className='list-unstyled list-ranking m-0'>
                <li className="item item-featured">
                    <div className="index index-1">
                        <i className="svg-icon icon-medal-1"></i>
                    </div>
                    <div className="content media align-items-center py-1">
                        <div className="info py-3">
                            <h2 className="mb-1 fz-body text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" className="d-block">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                            <div className="d-flex align-items-center mb-2 text-success">
                                <span className="mr-2">164,956</span>
                                <i className="nh-icon icon-eye-glasses"></i>
                            </div>
                            <div className="d-flex align-items-center text-secondary fz-13 mb-1 text-overflow-lines-1">
                                <User size={16}/> Thanh Chưng
                            </div>
                            <div className="d-flex align-items-center text-secondary fz-13 text-overflow-lines-1">
                                <Book size={16}/> Dã Sử
                            </div>
                        </div>
                        <div className="thumb ml-auto pr-3 py-3">
                            <div className="book-cover">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" title="Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!" className="book-cover-link">
                                    <img src="https://static.cdnno.com/poster/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than/150.jpg?1670033247" alt="Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!"/>
                                </a>
                                <span className="book-cover-shadow"></span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Views