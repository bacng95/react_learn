// react import
import { useState } from 'react'

// thirt-party import

import {
    Search
} from 'react-feather'

import classnames from 'classnames'

// style import

import './styles/Search.scss'


export default (props) => {
    
    // Vars
    const [ searchButtonShow, setSearchButtonShow ] = useState(false)

    function formFocusHandle (evt) {
        setSearchButtonShow(true)
    }
    function formBlurHandle () {
        setSearchButtonShow(false)
    }


    return (
        <form
        className={
            classnames('search-form d-flex align-items-center border rounded-pill w-100 border-0', {
                'search-form--focus': searchButtonShow
            })
        }
        onFocus={formFocusHandle}
        onBlur={formBlurHandle}
        >
            {/* icon */}
            <Search className='d-block' size={18}/>
            
            <input
            className="form-control border-0 bg-transparent search-form__input"
            placeholder='Tên sản phẩm, nhu cầu, hãng...'
            />
            
            <button className={
                classnames('search-form__search btn btn-transparent btn-submit text-nowrap', {
                })
            }
            >
                Tìm kiếm
            </button>
        </form>
    )
}