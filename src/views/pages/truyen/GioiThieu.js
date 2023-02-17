import {Row, Col} from 'reactstrap'

const GioiThieu = props => {

    const  {
        description
    } = props

    const createMarkup = (text) => {
        return {__html: text}
    }

    return (
        <Row>
            <Col sm="12">
                <div className="content" dangerouslySetInnerHTML={ createMarkup(description) }>
                </div>
            </Col>
        </Row>
    )
}

export default GioiThieu