import {
    Button,
    FormGroup,
    Input,
    Label,
    Modal, ModalBody
} from 'reactstrap'

export default (props) => {

    let formData = {
        email: '',
        password: ''
    }

    return (
        <Modal centered={true} isOpen={props.show} toggle={props.loginClose}>
            <ModalBody >
                <form>
                    <h2 className='text-center my-3'>Đăng nhập</h2>
                    <div className="row">
                        <div className='col-12'>
                            <FormGroup>
                                <Label for='login_yourEmail'>
                                    Email
                                </Label>
                                <Input autoFocus={true} id="login_yourEmail" placeholder='Email của bạn'/>
                            </FormGroup>
                        </div>
                        <div className='col-12 mb-4'>
                            <FormGroup>
                                <Label for='login_yourPassword'>
                                    Password
                                </Label>
                                <Input id="login_yourPassword" type='password' placeholder='Mật khẩu của bạn'/>
                            </FormGroup>
                        </div>
                        <div className='col-12 mb-4'>
                            <Button type='submit' className='w-100' color='warning'>Đăng nhập</Button>
                        </div>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    )
}