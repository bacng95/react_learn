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
import { Link } from 'react-router-dom'

// Third party import
import { X, User } from 'react-feather'
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
            <UncontrolledTooltip placement='bottom' target="user">{ props.tooltip }</UncontrolledTooltip>
            <div className='dropdown-user nav-item' id="user">
                <Button
                    id="popover-account"
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
                    <User size={20}/>
                </Button>

                <Popover
                    placement='top'
                    target='popover-account'
                    trigger="legacy"
                    isOpen={popoverOpen}
                    toggle={() => setPopoverOpen(!popoverOpen)}
                    popperClassName='border-0 shadow'
                    hideArrow
                    id='accountPopover'
                    offset={[-150, 8]}
                    placementPrefix="header-popover"
                >
                    <PopoverHeader className='d-flex justify-content-between align-items-center bg-white p-3'>
                        <span className='h5 m-0 fw-bold'>Tài khoản</span>
                        <Button color='transparent' className='p-0 border-0' onClick={() => setPopoverOpen(false)} >
                            <X/>
                        </Button>
                    </PopoverHeader>
                    <PopoverBody>
                        <div className='mx-3'>
                            <section>
                                <h6>Quản lý đơn hàng</h6>
                            </section>
                        </div>
                    </PopoverBody>
                </Popover>
                
            </div>
        </>
    )
}