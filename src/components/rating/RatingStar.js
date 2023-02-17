import './rating.scss'

const RatingStar = props => {

    const {
        rate
    } = props

    const percent = (rate ?? 0) * 10;

    return (
        <span className="nh-rating">
            <i className="nh-icon icon-star"></i>
            <i className="nh-icon icon-star"></i>
            <i className="nh-icon icon-star"></i>
            <i className="nh-icon icon-star"></i>
            <i className="nh-icon icon-star"></i>
            <span className="active" style={{ width: percent }}>
                <i className="nh-icon icon-star"></i>
                <i className="nh-icon icon-star"></i>
                <i className="nh-icon icon-star"></i>
                <i className="nh-icon icon-star"></i>
                <i className="nh-icon icon-star"></i>
            </span>
        </span>
    )
}

export default RatingStar