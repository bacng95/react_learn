// ** Reactstrap import
import { Container, Breadcrumb, BreadcrumbItem, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from "reactstrap"

// ** React Import
import { useState } from 'react'

// Third paty import
import classnames from 'classnames'

import { useDispatch, useSelector } from 'react-redux'

import RatingStar from "@src/components/rating/RatingStar"
import GioiThieu from './GioiThieu'
import DanhGia from './DanhGia'
import DanhSachChuong from './DanhSachChuong'
import BinhLuan from './BinhLuan'

const Truyen = () => {

    const [activeTab, setActiveTab] = useState('1')

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
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
                                    <h1 className="h4 me-2 fw-bold">
                                        <a className="text-dark" href="https://metruyencv.com/truyen/de-ba">Đế Bá</a>
                                    </h1>
                                </div>
                                <ul className="list-unstyled mb-3">
                                    <li className="d-inline-block border border-secondary px-3 py-1 text-secondary rounded me-2 mb-2">
                                        <a className="text-secondary" href="https://metruyencv.com/tac-gia/357">Yếm Bút Tiêu Sinh</a>
                                    </li>
                                    <li className="d-inline-block border border-danger px-3 py-1 text-danger rounded me-2 mb-2">Đang ra</li>
                                    <li className="d-inline-block border border-warning px-3 py-1 text-warning rounded me-2 mb-2">
                                        <a className="text-warning" href="https://metruyencv.com/truyen?genre=3">Huyền Huyễn</a>
                                    </li>
                                </ul>
                                <ul className="list-unstyled d-flex mb-3">
                                    <li className="me-5">
                                        <div className="fw-bold h5 mb-1">5237</div>
                                        <div>Chương</div>
                                    </li>
                                    <li className="me-5">
                                        <div className="fw-bold h5 mb-1">10.1M</div>
                                        <div>Lượt đọc</div>
                                    </li>
                                </ul>
                                <div className="d-flex align-items-center mb-4">
                                    <RatingStar rate={4.78} />
                                    <span className="d-inline-block ms-2">
                                        <span className="fw-bold">4.78</span>/5
                                    </span>
                                    <span className="d-inline-block text-secondary ms-1">(187 đánh giá)</span>
                                </div>
                                <ul className="list-unstyled d-flex align-items-center mb-0">
                                    <li id="reading-book" className="me-3 w-150">
                                        <a className="cursor-pointer rounded btn btn-danger btn-md btn-block btn-shadow fw-bold d-flex align-items-center justify-content-center">
                                            <i className="nh-icon icon-glass me-2"></i>Đọc tiếp
                                        </a>
                                    </li>
                                    <li id="bookmark" className="me-3 w-150">
                                        <span data-v-20fe2610="">
                                            <a data-v-20fe2610="" href="#" className="rounded btn btn-outline-secondary btn-md btn-block fw-bold d-flex align-items-center justify-content-center">
                                                <i data-v-20fe2610="" className="nh-icon icon-save me-2"></i> Đánh dấu
                                            </a>
                                        </span>
                                    </li>
                                    <li id="suggest-book" className="me-3 w-150">
                                        <div>
                                            <a href="#" className="rounded btn btn-outline-warning btn-md btn-block bg-yellow-white text-warning fw-bold d-flex align-items-center justify-content-center">
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
                                    <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggleTab('1'); }}
                                    >
                                        Giới thiệu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink 
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggleTab('2'); }}
                                    >
                                        Đánh giá
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggleTab('3'); }}
                                    >
                                        Danh sách chương
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggleTab('4'); }}
                                    >
                                        Bình luận
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab} className="mt-3">
                                <TabPane tabId="1">
                                    <GioiThieu description="test"/>
                                </TabPane>
                                <TabPane tabId="2">
                                    <DanhGia/>
                                </TabPane>
                                <TabPane tabId="3">
                                    <DanhSachChuong/>
                                </TabPane>
                                <TabPane tabId="4">
                                    <BinhLuan/>
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
                                <div className="h4 py-3 fw-bold text-center">
                                    DarkHero
                                </div>
                                <div className="row no-gutters text-center">
                                    <div className="col-4">
                                        <i className="nh-icon icon-book text-primary h4 m-0"></i>
                                        <div className="my-2">Số truyện</div>
                                        <div className="fw-bold h4 mb-0">164</div>
                                    </div>
                                    <div className="col-4">
                                        <i className="nh-icon icon-layer text-primary h4 m-0"></i>
                                        <div className="my-2">Số chương</div>
                                        <div className="fw-bold h4 mb-0">152,1k</div>
                                    </div>
                                    <div className="col-4">
                                        <i className="nh-icon icon-badge text-primary h4 m-0"></i>
                                        <div className="my-2">Cấp</div>
                                        <div className="fw-bold h4 mb-0">4</div>
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
        </Container>
    )
}

export default Truyen