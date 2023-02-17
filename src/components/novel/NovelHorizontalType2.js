import classnames from 'classnames'
import { Link } from 'react-router-dom'

const NovelHorizontalType2 = (props) => {

    const {
        className,
        novel
    } = props

    const createMarkup = (text) => {
        return {__html: text}
    }

    return (
        <div
            className={classnames("rounded bg-white p-2 w-100 h-100 shadow novel-type-2", {
                [className]: className
            })}
        >
            <Link to={'/truyen/'+novel.slug} className="d-flex h-100">
                <div style={{ width: 80, borderRadius: 8 }} className='novel-thumbnail me-3 overflow-hidden position-relation'>
                    <img className='w-100 h-100' src={novel.thumbnail} />
                </div>
                <div className="novel-info flex-grow-1 flex-shrink-1 flex-basis-0 w-100">
                    <h2
                    className="mb-1 small text-dark fw-bold text-overflow-lines-2 mb-2"
                    style={{minHeight: 34}}
                    >
                        { novel.title }
                    </h2>

                    <div
                    className="text-muted novel-description text-overflow-lines-2 small mb-2"
                    dangerouslySetInnerHTML={ createMarkup(novel.description) }
                    />
                    
                    <div>
                        <span className='fw-bold text-primary' title={novel.category.title} href={novel.category.slug}>{ novel.category.title }</span>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default NovelHorizontalType2