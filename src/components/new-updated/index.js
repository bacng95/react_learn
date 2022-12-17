import classnames from 'classnames'

const NewUpdate = (props) => {
    
    const {
        className
    } = props

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
                        <tr>
                            <td className="align-middle text-tertiary">
                                <a href='#' className="text-overflow-lines-1 text-secondary small">Huyền Huyễn</a>
                            </td>
                            <td className="align-middle w-25">
                                <h2 className="h6 m-0 fw-bold text-overflow-lines-1">
                                    <a href="https://metruyencv.com/truyen/liep-menh" className='small text-primary'>Liệp Mệnh Nhân</a>
                                </h2>
                            </td>
                            <td className="align-middle w-25">
                                <a href="https://metruyencv.com/truyen/liep-menh/chuong-396" className="small text-blue text-overflow-lines-1">Chương 396: Di thiên hoán nhật ẩn Đế Tinh</a>
                            </td>
                            <td className="align-middle">
                                <span className="text-overflow-lines-1 small text-dark">Vĩnh Hằng Chi Hỏa</span>
                            </td>
                            <td className="align-middle text-tertiary">
                                <span className="text-overflow-lines-1 small text-secondary">Hoàng Châu</span>
                            </td>
                            <td className="align-middle text-tertiary text-right small text-secondary">4 phút trước</td>
                        </tr>
                        <tr>
                            <td className="align-middle text-tertiary">
                                <a href='#' className="text-overflow-lines-1 text-secondary small">Huyền Huyễn</a>
                            </td>
                            <td className="align-middle w-25">
                                <h2 className="h6 m-0 fw-bold text-overflow-lines-1">
                                    <a href="https://metruyencv.com/truyen/liep-menh" className='small text-primary'>Liệp Mệnh Nhân</a>
                                </h2>
                            </td>
                            <td className="align-middle w-25">
                                <a href="https://metruyencv.com/truyen/liep-menh/chuong-396" className="small text-blue text-overflow-lines-1">Chương 396: Di thiên hoán nhật ẩn Đế Tinh</a>
                            </td>
                            <td className="align-middle">
                                <span className="text-overflow-lines-1 small text-dark">Vĩnh Hằng Chi Hỏa</span>
                            </td>
                            <td className="align-middle text-tertiary">
                                <span className="text-overflow-lines-1 small text-secondary">Hoàng Châu</span>
                            </td>
                            <td className="align-middle text-tertiary text-right small text-secondary">4 phút trước</td>
                        </tr>
                        <tr>
                            <td className="align-middle text-tertiary">
                                <a href='#' className="text-overflow-lines-1 text-secondary small">Huyền Huyễn</a>
                            </td>
                            <td className="align-middle w-25">
                                <h2 className="h6 m-0 fw-bold text-overflow-lines-1">
                                    <a href="https://metruyencv.com/truyen/liep-menh" className='small text-primary'>Liệp Mệnh Nhân</a>
                                </h2>
                            </td>
                            <td className="align-middle w-25">
                                <a href="https://metruyencv.com/truyen/liep-menh/chuong-396" className="small text-blue text-overflow-lines-1">Chương 396: Di thiên hoán nhật ẩn Đế Tinh</a>
                            </td>
                            <td className="align-middle">
                                <span className="text-overflow-lines-1 small text-dark">Vĩnh Hằng Chi Hỏa</span>
                            </td>
                            <td className="align-middle text-tertiary">
                                <span className="text-overflow-lines-1 small text-secondary">Hoàng Châu</span>
                            </td>
                            <td className="align-middle text-tertiary text-right small text-secondary">4 phút trước</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default NewUpdate