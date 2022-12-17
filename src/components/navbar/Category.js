import './styles/Category.scss'

import classnames from 'classnames'

// reactstrap import
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'

// third-paty inport
import {
    Menu
} from 'react-feather'



export default (props) => {

    const {
        className
    } = props

    return (
        <li 
            className={
                classnames('nav-item dropdown dropdown-hover px-2', {
                    [className]: className,
                })
            }
        >
            <UncontrolledDropdown direction="down">
                <DropdownToggle color='transparent' className='nav-link d-flex align-items-center fw-bolder'>
                    <Menu size={20} className="me-3 text-black" />
                    Thể loại
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu--category rounded-0 shadow border-0">
                    <div className='row no-gutters m-0'>
                        <div className="col-6 d-flex align-items-center">
                            <DropdownItem>
                                <i className="svg-icon mr-2"></i>Tất cả
                            </DropdownItem>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <DropdownItem>
                                <i className="svg-icon mr-2"></i>Tiên hiệp
                            </DropdownItem>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <DropdownItem>
                                <i className="svg-icon mr-2"></i>Huyền Huyễn
                            </DropdownItem>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <DropdownItem>
                                <i className="svg-icon mr-2"></i>Khoa Huyễn
                            </DropdownItem>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <DropdownItem>
                                <i className="svg-icon mr-2"></i>Võng Du
                            </DropdownItem>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <DropdownItem>
                                <i className="svg-icon mr-2"></i>Đô Thị
                            </DropdownItem>
                        </div>
                    </div>
                </DropdownMenu>
            </UncontrolledDropdown>
        </li>
    )
}