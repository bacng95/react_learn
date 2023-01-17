// ** Reactstrap import
import { Container, Breadcrumb, BreadcrumbItem, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from "reactstrap"

// Third paty import
import classnames from 'classnames'

import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from "../../redux/couter"

const Truyen = () => {

    const dispatch = useDispatch()
    const couter = useSelector(state => {
        return state.couter.couter
    })

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }
    
    return (
        <Container className="pb-5 pt-3">
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">
                        Home
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Library
                </BreadcrumbItem>
            </Breadcrumb>
            <section className="page-content">
                <div className="row gx-0">
                    <div className="col-12">
                        <div className="p-3 rounded bg-white shadow d-flex align-items-start">
                            <div className="flex-shrink-0 text-center">
                                <div className="nh-thumb nh-thumb--210">
                                    <img src="https://static.cdnno.com/poster/de-ba/300.jpg?1585205580"/>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-4">
                                <div className="d-flex justify-content-start mb-3">
                                    <h1 className="h3 me-2 fw-normal">
                                        <a className="text-dark" href="https://metruyencv.com/truyen/de-ba">Đế Bá</a>
                                    </h1>
                                </div>
                                <ul className="list-unstyled mb-3">
                                    <li className="d-inline-block border border-secondary px-3 py-1 text-secondary rounded-3 me-2 mb-2">
                                        <a className="text-secondary" href="https://metruyencv.com/tac-gia/357">Yếm Bút Tiêu Sinh</a>
                                    </li>
                                    <li className="d-inline-block border border-danger px-3 py-1 text-danger rounded-3 me-2 mb-2">Đang ra</li>
                                    <li className="d-inline-block border border-warning px-3 py-1 text-warning rounded-3 me-2 mb-2">
                                        <a className="text-warning" href="https://metruyencv.com/truyen?genre=3">Huyền Huyễn</a>
                                    </li>
                                </ul>
                                <ul className="list-unstyled d-flex mb-3">
                                    <li className="me-5">
                                        <div className="font-weight-semibold h4 mb-1">5237</div>
                                        <div>Chương</div>
                                    </li>
                                    <li className="me-5">
                                        <div className="font-weight-semibold h4 mb-1">10.1M</div>
                                        <div>Lượt đọc</div>
                                    </li>
                                </ul>
                                <div className="d-flex align-items-center mb-4">
                                    <span className="nh-rating">
                                        <i className="nh-icon icon-star"></i>
                                        <i className="nh-icon icon-star"></i>
                                        <i className="nh-icon icon-star"></i>
                                        <i className="nh-icon icon-star"></i>
                                        <i className="nh-icon icon-star"></i>
                                        <span className="active">
                                            <i className="nh-icon icon-star"></i>
                                            <i className="nh-icon icon-star"></i>
                                            <i className="nh-icon icon-star"></i>
                                            <i className="nh-icon icon-star"></i>
                                            <i className="nh-icon icon-star"></i>
                                        </span>
                                    </span>
                                    <span className="d-inline-block ms-2">
                                        <span className="font-weight-semibold">4.66</span>/5
                                    </span>
                                    <span className="d-inline-block text-secondary ms-1">(187 đánh giá)</span>
                                </div>
                                <ul className="list-unstyled d-flex align-items-center mb-0">
                                    <li id="reading-book" className="me-3 w-150">
                                        <a className="cursor-pointer btn btn-danger btn-md btn-block btn-shadow font-weight-semibold d-flex align-items-center justify-content-center">
                                            <i className="nh-icon icon-glass me-2"></i>Đọc tiếp
                                        </a>
                                    </li>
                                    <li id="bookmark" className="me-3 w-150">
                                        <span data-v-20fe2610="">
                                            <a data-v-20fe2610="" href="#" className="btn btn-outline-secondary btn-md btn-block font-weight-semibold d-flex align-items-center justify-content-center">
                                                <i data-v-20fe2610="" className="nh-icon icon-save me-2"></i> Đánh dấu
                                            </a>
                                        </span>
                                    </li>
                                    <li id="suggest-book" className="me-3 w-150">
                                        <div>
                                            <a href="#" className="btn btn-outline-warning btn-md btn-block bg-yellow-white text-warning font-weight-semibold d-flex align-items-center justify-content-center">
                                                <i className="svg-icon icon-flower me-2"></i> Đề cử
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-4">
                <div className="row">
                    <div className="col-8">
                        <div className="p-3 rounded bg-white shadow">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink className="active" onClick={function noRefCheck(){}}>
                                        Giới thiệu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="" onClick={function noRefCheck(){}}>
                                        Đánh giá
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="" onClick={function noRefCheck(){}}>
                                        Danh sách chương
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="" onClick={function noRefCheck(){}}>
                                        Bình luận
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab="1" className="mt-3">
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <div className="content">
                                                <p>Ngàn vạn năm trước, Lý Thất Dạ trồng xuống một cây Thúy Trúc.Tám trăm vạn năm trước, Lý Thất Dạ nuôi một đầu cá chép.Năm trăm vạn năm trước, Lý Thất Dạ thu dưỡng một cái tiểu cô nương.... ... ... ... ...Hôm nay, Lý Thất Dạ tỉnh lại sau giấc ngủ, Thúy Trúc tu luyện thành thần linh, cá chép hóa thành Kim Long, tiểu cô nương trở thành Cửu Giới Nữ Đế.Đây là một cái dưỡng thành cố sự, một cái bất tử Nhân tộc tiểu tử dưỡng thành Yêu Thần, dưỡng thành Tiên thú, dưỡng thành Nữ Đế cố sự.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <h4>
                                                Tab 2 Contents
                                            </h4>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="p-3 rounded bg-white shadow">
                            <div className="mb-4 bg-yellow-white rounded-2 p-4">
                                <div className="nh-avatar nh-avatar--90 mx-auto mb-3">
                                    <img alt="" className="img-fluid" src="https://static.cdnno.com/user/b5a5e2e8958e765c2822d5cf7c60df7d/100.jpg?1592316927"/>
                                    <span className="level bg-danger rounded-3 text-white">Bạch Kim</span>
                                </div>
                                <div className="h4 py-3 font-weight-semibold text-center">
                                    DarkHero
                                </div>
                                <div className="row no-gutters text-center">
                                    <div className="col-4">
                                        <i className="nh-icon icon-book text-primary h4 m-0"></i>
                                        <div className="my-2">Số truyện</div>
                                        <div className="font-weight-semibold h4 mb-0">164</div>
                                    </div>
                                    <div className="col-4">
                                        <i className="nh-icon icon-layer text-primary h4 m-0"></i>
                                        <div className="my-2">Số chương</div>
                                        <div className="font-weight-semibold h4 mb-0">152,1k</div>
                                    </div>
                                    <div className="col-4">
                                        <i className="nh-icon icon-badge text-primary h4 m-0"></i>
                                        <div className="my-2">Cấp</div>
                                        <div className="font-weight-semibold h4 mb-0">4</div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="nh-slider">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row gx-0 p-3">
                    <div className="col-12">
                        <div className="row bg-white p-3 shadow rounded">
                            <div className="col-12">
                                <button className="btn btn-success me-2" onClick={handleIncrement}>+</button>
                                <button className="btn btn-warning" onClick={handleDecrement}>-</button>
                            </div>
                            <div className="col-12">
                                <p className="">Result: { couter }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Truyen