import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { Eye } from 'react-feather'

const NovelHorizontalType1 = (props) => {

    const {
        className,
        novel
    } = props

    const GenreRender = () => {
        if (!novel.category) return
        return (
            <span className='fw-bold text-primary' title={novel.category.title} href={novel.category.slug}>{ novel.category.title }</span>
        )
    }

    const ViewRender = () => {
        if (!novel.view) return
        return (
            <div className=" small d-flex align-items-center text-success">
                <Eye size={14} className="me-1"/> { novel.view }
            </div>
        )
    }



    return (
        <div
            className={classnames("d-flex align-items-center h-100", {
                [className]: className
            })}
        >
            <Link to={'/truyen/'+novel.slug} className="bg-white p-2 w-100 rounded shadow h-100">
                <div className='d-flex h-100 d-flex align-items-center '>
                    <div className='novel-thumbnail me-3 h-100'>
                        <img style={{ height: 60, borderRadius: 8 }} className='overflow-hidden' src={novel.thumbnail} title={novel.title}/>
                    </div>
                    <div className="novel-info w-100">
                        <h2 className="mb-1 h6 text-dark fw-bold">
                            { novel.title }
                        </h2>
                        <div className='d-flex align-items-center justify-content-between'>
                            <GenreRender/>
                            <ViewRender/>
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>
    )

}

export default NovelHorizontalType1