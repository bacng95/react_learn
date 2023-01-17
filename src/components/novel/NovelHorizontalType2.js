import classnames from 'classnames'

const NovelHorizontalType2 = (props) => {

    const { className, title, view, thumbnail, desc, genre } = props

    return (
        <div
            className={classnames("rounded bg-white p-2 w-100 h-100 shadow novel-type-2", {
                [className]: className
            })}
        >
            <a href="#" className="d-flex">
                <div style={{ width: 80, borderRadius: 8 }} className='novel-thumbnail me-3 overflow-hidden position-relation'>
                    <img className='w-100' src={thumbnail} />
                </div>
                <div className="novel-info flex-grow-1 flex-shrink-1 flex-basis-0 w-100">
                    <h2 className="mb-1 small text-dark fw-bold text-overflow-lines-2 mb-2">
                        { title }
                    </h2>
                    <div className="text-muted novel-description text-overflow-lines-2 small mb-2">
                        { desc }
                    </div>
                    <div>
                        <span className='fw-bold text-primary' title={genre.name} href={genre.slug}>{ genre.name }</span>
                    </div>
                </div>
            </a>
        </div>
    )

}

export default NovelHorizontalType2