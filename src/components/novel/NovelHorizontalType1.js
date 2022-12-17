import classnames from 'classnames'

import { Eye } from 'react-feather'

const NovelHorizontalType1 = (props) => {

    const {
        className,
        title,
        view,
        thumbnail,
        genre
    } = props

    const GenreRender = () => {
        if (!genre) return
        return (
            <a className='fw-bold text-primary' title={genre.name} href={genre.slug}>{ genre.name }</a>
        )
    }

    const ViewRender = () => {
        if (!view) return
        return (
            <div className=" small d-flex align-items-center text-success">
                <Eye size={16} className="me-1"/> { view }
            </div>
        )
    }

    return (
        <div
            className={classnames("d-flex align-items-center h-100", {
                [className]: className
            })}
        >
            <a href="#" className="bg-white p-2 w-100 rounded shadow h-100">
                <div className='d-flex h-100 d-flex align-items-center '>
                    <div className='novel-thumbnail me-3 h-100'>
                        <img style={{ height: 60, borderRadius: 8 }} className='overflow-hidden' src={thumbnail} title={title}/>
                    </div>
                    <div className="novel-info w-100">
                        <h2 className="mb-1 h6 text-dark fw-bold">
                            { title }
                        </h2>
                        <div className='d-flex align-items-center justify-content-between'>
                            <GenreRender/>
                            <ViewRender/>
                        </div>
                    </div>
                    
                </div>
            </a>
        </div>
    )

}

export default NovelHorizontalType1