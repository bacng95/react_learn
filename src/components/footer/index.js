import { Book, BookOpen, Facebook, Lock, Phone, UserCheck } from "react-feather"
import { Container, Card } from "reactstrap"


export default (props) => {


    return (
        <footer className="the-footer py-5">
            <div className="container">
                <Card className="items-stretch border-0 shadow rounded">
                    <div className="p-4 pb-2">
                        <section>
                            <p className="my-2 h3 text-black fw-bold">
                                Thông tin hữu ích
                            </p>
                            <div className="mt-3 row">
                                <div className="col-6 col-lg-4 mb-3">
                                    <a
                                        href="tel:0859559696"
                                        className="cursor-pointer py-2 px-3 btn btn-light rounded w-100"
                                    >
                                        <div className="d-flex align-items-center">
                                            <Phone size={20} className="text-blue"/>
                                            <span className="fw-bold ms-2">Hotline: 085.955.9696</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4 mb-3">
                                    <a
                                        href="https://fb.com"
                                        className="cursor-pointer py-2 px-3 btn btn-light rounded w-100"
                                    >
                                        <div className="d-flex align-items-center">
                                            <Facebook size={20} className="text-blue"/>
                                            <span className="fw-bold ms-2">Chúng tôi trên Facebook</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4 mb-3">
                                    <a
                                        href="#"
                                        className="cursor-pointer py-2 px-3 btn btn-light rounded w-100"
                                    >
                                        <div className="d-flex align-items-center">
                                            <BookOpen size={20} className="text-blue"/>
                                            <span className="fw-bold ms-2">Hướng dẫn sử dụng</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4 mb-3">
                                    <a
                                        href="#"
                                        className="cursor-pointer py-2 px-3 btn btn-light rounded w-100"
                                    >
                                        <div className="d-flex align-items-center">
                                            <Book size={20} className="text-blue"/>
                                            <span className="fw-bold ms-2">Điều khoản dịch vụ</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4 mb-3">
                                    <a
                                        href="#"
                                        className="cursor-pointer py-2 px-3 btn btn-light rounded w-100"
                                    >
                                        <div className="d-flex align-items-center">
                                            <Lock size={20} className="text-blue"/>
                                            <span className="fw-bold ms-2">Chính sách bảo mật</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4 mb-3">
                                    <a
                                        href="#"
                                        className="cursor-pointer py-2 px-3 btn btn-light rounded w-100"
                                    >
                                        <div className="d-flex align-items-center">
                                            <UserCheck size={20} className="text-blue"/>
                                            <span className="fw-bold ms-2">Về bản quyền</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </Card>
            </div>
        </footer>
    )
}