
import NavbarRight from "./NavbarRight"
import NavbarCenter from "./NavbarCenter"
import NavbarLeft from "./NavbarLeft"


export default () => {
    return (
        <header className="shadow p-2">
            <div className="container">
                <div className='d-flex w-100'>
                    <NavbarLeft/>
                    {/* <NavbarCenter/> */}
                    <NavbarRight/>
                </div>
            </div>
        </header>
    )
}