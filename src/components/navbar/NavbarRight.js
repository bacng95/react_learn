import UserDropdown from './User'
import NotificationDropdown from './Notification'

export default () => {

    return (
        <div className='header__right d-flex align-items-center ms-5'>
            <div className='align-items-center ms-auto d-flex'>
                <div className='me-3'>
                    <NotificationDropdown tooltip="Thông báo"/>
                </div>
                <div>
                    <UserDropdown tooltip="Tài khoản"/>
                </div>
            </div>
        </div>
    )
}