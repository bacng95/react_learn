import './styles/Popover.scss'

// reactrap import 
import {
    UncontrolledTooltip,
    Popover,
    PopoverBody,
    Button,
    PopoverHeader
} from 'reactstrap'

// Utils
import { isUserLoggedIn } from '@utils'

// react import
import { useState, useEffect } from 'react'

// Third party import
import { X, Bell } from 'react-feather'
import classnames from 'classnames'


export default (props) => {
    
    // Store Vars
    // const dispatch = useDispatch()
    
    //** State
    const [userData, setUserData] = useState(null)
    const [popoverOpen, setPopoverOpen] = useState(false)

    //** ComponentDidMount
    useEffect(() => {
        if (isUserLoggedIn() !== null) {
            setUserData(JSON.parse(localStorage.getItem('userData')))
        }
    }, [])

    // Vars
    // const userAvatar = (userData && userData.avatar) || defaultAvatar

    return (
        <>
            <UncontrolledTooltip placement='bottom' target="notification">{ props.tooltip }</UncontrolledTooltip>
            <div className='dropdown-user nav-item' id="notification">
                <Button
                    id="popover-notification"
                    color='light'  
                    className={
                        classnames('border-0 rounded-pill p-2 d-flex justify-content-center align-items-center', {
                            'actived': popoverOpen
                        })
                    }
                    style={{
                        width: 40,
                        height: 40
                    }}
                >
                    <Bell size={20}/>
                </Button>

                <Popover
                    placement='top'
                    target='popover-notification'
                    trigger="legacy"
                    isOpen={popoverOpen}
                    toggle={() => setPopoverOpen(!popoverOpen)}
                    popperClassName='border-0 shadow'
                    hideArrow
                    id='notificationPopover'
                    offset={[-150, 8]}
                    placementPrefix="header-popover"
                >
                    <PopoverHeader className='d-flex justify-content-between align-items-center bg-white p-3'>
                        <span className='h5 m-0 fw-bold'>Thông báo</span>
                        <Button color='transparent' className='p-0 border-0' onClick={() => setPopoverOpen(false)} >
                            <X/>
                        </Button>
                    </PopoverHeader>
                    <PopoverBody className=''>
                        <div className='mt-5 mx-4'>
                            <section>
                                <div className='d-flex flex-column align-items-center'>
                                    <Bell size={26} className="text-primary"/>
                                    <span className='fw-bold mt-3'>Chưa có thông báo nào</span>

                                    <div className='notification no-login mt-3 d-flex align-items-center flex-column'>
                                        <span className='px-2 text-center'>Hãy đăng nhập để tối ưu hóa trải nghiệm trên <strong>TruyenHay.day</strong> bạn nhé!</span>
                                        <Button className='fw-bold mt-3' color='primary'>Đăng nhập</Button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </PopoverBody>
                </Popover>
                
            </div>
        </>
    )
}