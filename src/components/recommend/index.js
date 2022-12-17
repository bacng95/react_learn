import classnames from 'classnames'
import NovelHorizontalType2 from '@src/components/novel/NovelHorizontalType2'

import { arrayPagination } from '@src/utility/Utils'

const Recommend = (props) => {

    const { className } = props

    const novels = [
        {
            id: 3432,
            title: 'Người Tại Thần Quỷ, Nhục Thân Vô Hạn Thôi Diễn',
            thumbnail: 'https://static.cdnno.com/poster/nguoi-tai-than-quy-nhuc-than-vo-han-thoi-dien/150.jpg',
            desc: ' Xuyên qua đến thế giới Phàm Nhân Tu Tiên Truyện.Có được hiếm thấy Băng hệ dị linh căn."Bái nhập tông môn?"Cái kia còn cần nghĩ, tất nhiên là Yểm Nguyệt Tông a."Ma đạo xâm lấn?"Giấc mộng của ta, không phải liền là Hợp Hoan Tông thường ngày sao.------ -----------Main tu công pháp cần song tu nên có nhiều nữ.----------------- ',
            author: {
                name: 'Dược thiên sầu',
                slug: '/author/duoc-thien-sau-3432'
            },
            genre: {
                name: 'Tiêp hiệp',
                slug: '/genre/tien-hiep-342'
            }
        },
        {
            id: 3432,
            title: 'Người Tại Thần Quỷ, Nhục Thân Vô Hạn Thôi Diễn',
            thumbnail: 'https://static.cdnno.com/poster/nguoi-tai-than-quy-nhuc-than-vo-han-thoi-dien/150.jpg',
            desc: ' Xuyên qua đến thế giới Phàm Nhân Tu Tiên Truyện.Có được hiếm thấy Băng hệ dị linh căn."Bái nhập tông môn?"Cái kia còn cần nghĩ, tất nhiên là Yểm Nguyệt Tông a."Ma đạo xâm lấn?"Giấc mộng của ta, không phải liền là Hợp Hoan Tông thường ngày sao.------ -----------Main tu công pháp cần song tu nên có nhiều nữ.----------------- ',
            author: {
                name: 'Dược thiên sầu',
                slug: '/author/duoc-thien-sau-3432'
            },
            genre: {
                name: 'Tiêp hiệp',
                slug: '/genre/tien-hiep-342'
            }
        },
        {
            id: 3432,
            title: 'Người Tại Thần Quỷ, Nhục Thân Vô Hạn Thôi Diễn',
            thumbnail: 'https://static.cdnno.com/poster/nguoi-tai-than-quy-nhuc-than-vo-han-thoi-dien/150.jpg',
            desc: ' Xuyên qua đến thế giới Phàm Nhân Tu Tiên Truyện.Có được hiếm thấy Băng hệ dị linh căn."Bái nhập tông môn?"Cái kia còn cần nghĩ, tất nhiên là Yểm Nguyệt Tông a."Ma đạo xâm lấn?"Giấc mộng của ta, không phải liền là Hợp Hoan Tông thường ngày sao.------ -----------Main tu công pháp cần song tu nên có nhiều nữ.----------------- ',
            author: {
                name: 'Dược thiên sầu',
                slug: '/author/duoc-thien-sau-3432'
            },
            genre: {
                name: 'Tiêp hiệp',
                slug: '/genre/tien-hiep-342'
            }
        },
        {
            id: 3432,
            title: 'Người Tại Thần Quỷ, Nhục Thân Vô Hạn Thôi Diễn',
            thumbnail: 'https://static.cdnno.com/poster/nguoi-tai-than-quy-nhuc-than-vo-han-thoi-dien/150.jpg',
            desc: ' Xuyên qua đến thế giới Phàm Nhân Tu Tiên Truyện.Có được hiếm thấy Băng hệ dị linh căn."Bái nhập tông môn?"Cái kia còn cần nghĩ, tất nhiên là Yểm Nguyệt Tông a."Ma đạo xâm lấn?"Giấc mộng của ta, không phải liền là Hợp Hoan Tông thường ngày sao.------ -----------Main tu công pháp cần song tu nên có nhiều nữ.----------------- ',
            author: {
                name: 'Dược thiên sầu',
                slug: '/author/duoc-thien-sau-3432'
            },
            genre: {
                name: 'Tiêp hiệp',
                slug: '/genre/tien-hiep-342'
            }
        },
        {
            id: 3432,
            title: 'Người Tại Thần Quỷ, Nhục Thân Vô Hạn Thôi Diễn',
            thumbnail: 'https://static.cdnno.com/poster/nguoi-tai-than-quy-nhuc-than-vo-han-thoi-dien/150.jpg',
            desc: ' Xuyên qua đến thế giới Phàm Nhân Tu Tiên Truyện.Có được hiếm thấy Băng hệ dị linh căn."Bái nhập tông môn?"Cái kia còn cần nghĩ, tất nhiên là Yểm Nguyệt Tông a."Ma đạo xâm lấn?"Giấc mộng của ta, không phải liền là Hợp Hoan Tông thường ngày sao.------ -----------Main tu công pháp cần song tu nên có nhiều nữ.----------------- ',
            author: {
                name: 'Dược thiên sầu',
                slug: '/author/duoc-thien-sau-3432'
            },
            genre: {
                name: 'Tiêp hiệp',
                slug: '/genre/tien-hiep-342'
            }
        },
        {
            id: 3432,
            title: 'Người Tại Thần Quỷ, Nhục Thân Vô Hạn Thôi Diễn',
            thumbnail: 'https://static.cdnno.com/poster/nguoi-tai-than-quy-nhuc-than-vo-han-thoi-dien/150.jpg',
            desc: ' Xuyên qua đến thế giới Phàm Nhân Tu Tiên Truyện.Có được hiếm thấy Băng hệ dị linh căn."Bái nhập tông môn?"Cái kia còn cần nghĩ, tất nhiên là Yểm Nguyệt Tông a."Ma đạo xâm lấn?"Giấc mộng của ta, không phải liền là Hợp Hoan Tông thường ngày sao.------ -----------Main tu công pháp cần song tu nên có nhiều nữ.----------------- ',
            author: {
                name: 'Dược thiên sầu',
                slug: '/author/duoc-thien-sau-3432'
            },
            genre: {
                name: 'Tiêp hiệp',
                slug: '/genre/tien-hiep-342'
            }
        },
    ]


    const NovelRender = () => {
        return novels.map((el, index) => {
            return (
                <div
                    className='col-6 col-lg-4 mb-3'
                    key={index}
                >
                    <NovelHorizontalType2
                        thumbnail={el.thumbnail}
                        title={el.title}
                        author={el.author}
                        genre={el.genre}
                        desc={el.desc}
                    />
                </div>
            )
        })
    }
    
    return (
        <div className={classnames('', {
            [className]: className
        })}>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='h4 fw-bold'>Biên tập viên đề cử</h2>
                <a className='text-primary small' href='#'>Xem thêm</a>
            </div>
            <div className='mt-3'>
                <div className='row'>
                    { NovelRender() }
                </div>
            </div>
        </div>
    )
}


export default Recommend