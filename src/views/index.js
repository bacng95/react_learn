import './index.scss'

import { Fragment, useState } from 'react'
// import LoginModal from '../components/Login'

import DefaultLayout from '../layouts/DefaultLayout'


export default (props) => {

    let [ modalLoginState, setModalLoginState ] = useState(false)

    function btnLoginHandle () {
        setModalLoginState(true)
    }
    
    function loginClose () {
        setModalLoginState(false)
    }

    return (
        <Fragment>
            <DefaultLayout/>
        </Fragment>
    )

}