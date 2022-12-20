import classnames from 'classnames'

// ** feather import
import { Book, Eye, User } from 'react-feather'

const Views = (props) => {

    const {
        className,
    } = props


    return (
        <div className={classnames('shadow rounded bg-white p-3', {
            [className]: className
        })}>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='h4 fw-bold'>Đề cử tuần</h2>
                <a className='text-primary small' href='#'>Xem thêm</a>
            </div>
            <ul className='list-unstyled list-ranking m-0'>
                <li className="item item-featured">
                    <div className="index index-1">
                        <i className="svg-icon icon-medal-1"></i>
                    </div>
                    <div className="content media align-items-center py-1 d-flex">
                        <div className="info py-3">
                            <h2 className="mb-1 fz-body text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" className="d-block text-dark fw-bold">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                            <div className="d-flex align-items-center mb-2 text-success">
                                <span className="me-2 small">164,956</span>
                                <Eye size={14}/>
                            </div>
                            <div className="d-flex align-items-center text-secondary small mb-1 text-overflow-lines-1">
                                <User size={14} className="me-2"/><span>Thanh Chưng</span>
                            </div>
                            <div className="d-flex align-items-center text-secondary small text-overflow-lines-1">
                                <Book size={14} className="me-2"/> Dã Sử
                            </div>
                        </div>
                        <div className="thumb ms-auto pe-3 py-3">
                            <div className="book-cover">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" title="Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!" className="book-cover-link">
                                    <img src="https://static.cdnno.com/poster/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than/150.jpg?1670033247" alt="Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!"/>
                                </a>
                                <span className="book-cover-shadow"></span>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="item">
                    <div class="index index-2">
                        <i class="svg-icon icon-medal-2"></i>
                    </div>
                    <div class="content media align-items-center py-1 d-flex">
                        <div class="media-body py-2">
                            <h2 class="m-0 fz-body font-weight-normal pe-3 text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" class="d-block text-dark">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                        </div>
                        <span class="text-secondary small">32,943</span>
                    </div>
                </li>

                <li class="item">
                    <div class="index index-2">
                        <i class="svg-icon icon-medal-3"></i>
                    </div>
                    <div class="content media align-items-center py-1 d-flex">
                        <div class="media-body py-2">
                            <h2 class="m-0 fz-body font-weight-normal pe-3 text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" class="d-block text-dark">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                        </div>
                        <span class="text-secondary small">32,943</span>
                    </div>
                </li>

                <li class="item">
                    <div class="index index-4"> 4 </div>
                    <div class="content media align-items-center py-1 d-flex">
                        <div class="media-body py-2">
                            <h2 class="m-0 fz-body font-weight-normal pe-3 text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" class="d-block text-dark">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                        </div>
                        <span class="text-secondary small">32,943</span>
                    </div>
                </li>

                <li class="item">
                    <div class="index index-4"> 5 </div>
                    <div class="content media align-items-center py-1 d-flex">
                        <div class="media-body py-2">
                            <h2 class="m-0 fz-body font-weight-normal pe-3 text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" class="d-block text-dark">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                        </div>
                        <span class="text-secondary small">32,943</span>
                    </div>
                </li>

                <li class="item">
                    <div class="index index-4"> 5 </div>
                    <div class="content media align-items-center py-1 d-flex">
                        <div class="media-body py-2">
                            <h2 class="m-0 fz-body font-weight-normal pe-3 text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" class="d-block text-dark">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                        </div>
                        <span class="text-secondary small">32,943</span>
                    </div>
                </li>

                <li class="item">
                    <div class="index index-4"> 5 </div>
                    <div class="content media align-items-center py-1 d-flex">
                        <div class="media-body py-2">
                            <h2 class="m-0 fz-body font-weight-normal pe-3 text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" class="d-block text-dark">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                        </div>
                        <span class="text-secondary small">32,943</span>
                    </div>
                </li>

                <li class="item">
                    <div class="index index-4"> 5 </div>
                    <div class="content media align-items-center py-1 d-flex">
                        <div class="media-body py-2">
                            <h2 class="m-0 fz-body font-weight-normal pe-3 text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" class="d-block text-dark">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                        </div>
                        <span class="text-secondary small">32,943</span>
                    </div>
                </li>

                <li class="item">
                    <div class="index index-4"> 5 </div>
                    <div class="content media align-items-center py-1 d-flex">
                        <div class="media-body py-2">
                            <h2 class="m-0 fz-body font-weight-normal pe-3 text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" class="d-block text-dark">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                        </div>
                        <span class="text-secondary small">32,943</span>
                    </div>
                </li>

                <li class="item">
                    <div class="index index-4"> 5 </div>
                    <div class="content media align-items-center py-1 d-flex">
                        <div class="media-body py-2">
                            <h2 class="m-0 fz-body font-weight-normal pe-3 text-overflow-lines-1">
                                <a href="https://metruyencv.com/truyen/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than" class="d-block text-dark">Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!</a>
                            </h2>
                        </div>
                        <span class="text-secondary small">32,943</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Views