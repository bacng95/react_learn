import { Link } from "react-router-dom"
import { timeAgo } from '@src/utility/Utils'


const NovelRow = (props) => {

    const {
        data
    } = props

    const novel = data.novel
    const author = novel.author ?? {}
    const authorName = author.name ?? ''

    return (
        <tr>
            <td className="align-middle text-tertiary">
                <a href='#' className="text-overflow-lines-1 text-secondary small">{ novel.category.title }</a>
            </td>
            <td className="align-middle w-25">
                <h2 className="h6 m-0 fw-bold text-overflow-lines-1">
                    <Link to={'/truyen/'+novel.slug} className='small text-primary'>{ novel.title }</Link>
                </h2>
            </td>
            <td className="align-middle w-25">
                <Link to={'/truyen/' + novel.slug + '/' + data.slug} className='small text-blue text-overflow-lines-1'>{ data.title }</Link>
            </td>
            <td className="align-middle">
                <span className="text-overflow-lines-1 small text-dark">{ authorName }</span>
            </td>
            <td className="align-middle text-tertiary text-right small text-secondary">{ timeAgo(data.published_at) }</td>
        </tr>
    )
}

export default NovelRow