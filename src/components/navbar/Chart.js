import './styles/Category.scss'

// reactstrap import
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'


// Third Party Component import
import classnames from 'classnames'


export default (props) => {

    const {
        className
    } = props

    return (
        <li
            className={
                classnames('nav-item dropdown dropdown-hover px-2', {
                    [className]: className
                })
            }
        >
            <UncontrolledDropdown direction="down">
                <DropdownToggle color='transparent' className='nav-link d-flex align-items-center fw-bolder text-primary'>
                    Bảng xếp hạng
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu--chart rounded-0 shadow border-0">
                    <DropdownItem>
                        <i className="svg-icon mr-2"></i>Thịnh hành
                    </DropdownItem>
                    <DropdownItem>
                        <i className="svg-icon mr-2"></i>Đọc nhiều
                    </DropdownItem>
                    <DropdownItem>
                        <i className="svg-icon mr-2"></i>Đề cử
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </li>
    )
}