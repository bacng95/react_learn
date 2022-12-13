import UserDropdown from './User'

export default () => {

    return (
        <div className='header__right d-flex align-items-center w-100'>
            <ul className='nav navbar-nav align-items-center ms-auto'>
                <UserDropdown tooltip="Tài khoản"/>
            </ul>
        </div>
    )
}