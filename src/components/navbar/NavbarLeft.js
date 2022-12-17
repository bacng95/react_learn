
import Logo from './Logo'
import Category from './Category'
import Chart from './Chart'
import Search from './Search'


export default () => {

    return (
        <div className='header__left d-flex align-items-center w-100'>
            <Logo/>
            <ul className='navbar-nav ms-5 d-flex flex-row'>
                <Category/>
                <Chart className="ms-3"/>
            </ul>
            <Search className="ms-5"/>
        </div>
    )

}