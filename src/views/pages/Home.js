
// ** Reactstrap import
import { Container } from "reactstrap"

// ** Components import
import Slider from '@src/components/slider'
import NovelHorizontalType1 from "@src/components/novel/NovelHorizontalType1"
import Recommend from "@src/components/recommend"
import NewUpdate from "@src/components/new-updated"
import NovelCharts from "@src/components/novel-charts"


// Third paty import
import classnames from 'classnames'

const Home = () => {

    const hotNovel = [
        {
            id: 1,
            title: 'Quang Âm Chi Ngoại',
            slug: 'quang-am-chi-ngoai',
            thumbnail: 'https://static.cdnno.com/poster/ta-tru-than-tong-mon-tren-duoi-bi-them-khoc-roi/150.jpg',
            desc: 'Thiên địa là vạn vật chúng sinh khách xá, quang âm là từ xưa tới nay khách qua đường.<br><br>Tử sinh khác biệt, thật giống như mộng cùng tỉnh khác biệt, xôn xao biến hóa, không thể cật vấn.<br><br>Như vậy siêu việt sinh tử, đã vượt ra thiên địa, tại quang âm bên ngoài , chờ đợi chúng ta là cái gì?<br><br>Đây là Nhĩ Căn kế « Tiên Nghịch » « Cầu Ma » « Ngã Dục Phong Thiên » « Nhất Niệm Vĩnh Hằng » « Tam Thốn Nhân Gian » sau, sáng tác bộ tiểu thuyết thứ sáu « Quang Âm Chi Ngoại » <br><br>Converter: [Quang âm] có nghĩa là "Thời gian" hoặc là "Ánh sáng và bóng tối", hiện tại chưa rõ cốt truyện nên mình không biết theo nghĩa nào, nên tạm để hán việt. <br>Nếu có lỗi về convert hoặc từ nào khó hiểu thì mọi người vui lòng báo mình nhé. Cầu đề cử hoa, cảm xúc, cảm ơn mọi người ạ.',
            view: 43432,
            genre: {
                name: 'Tiêp hiệp',
                slug: '/genre/tien-hiep-342'
            }
        },
        {
            id: 231,
            slug: 'quang-am-chi-ngoai',
            title: 'Võ nghịch cửu thiên giới',
            thumbnail: 'https://static.cdnno.com/poster/ta-tru-than-tong-mon-tren-duoi-bi-them-khoc-roi/150.jpg',
            desc: ' Xuyên qua đến thế giới Phàm Nhân Tu Tiên Truyện.Có được hiếm thấy Băng hệ dị linh căn."Bái nhập tông môn?"Cái kia còn cần nghĩ, tất nhiên là Yểm Nguyệt Tông a."Ma đạo xâm lấn?"Giấc mộng của ta, không phải liền là Hợp Hoan Tông thường ngày sao.------ -----------Main tu công pháp cần song tu nên có nhiều nữ.----------------- ',
            view: 43432,
            genre: {
                name: 'Tiêp hiệp',
                slug: '/genre/tien-hiep-342'
            }
        },
        {
            id: 231,
            slug: 'quang-am-chi-ngoai',
            title: 'Võ nghịch cửu thiên giới',
            thumbnail: 'https://static.cdnno.com/poster/ta-tru-than-tong-mon-tren-duoi-bi-them-khoc-roi/150.jpg',
            desc: ' Xuyên qua đến thế giới Phàm Nhân Tu Tiên Truyện.Có được hiếm thấy Băng hệ dị linh căn."Bái nhập tông môn?"Cái kia còn cần nghĩ, tất nhiên là Yểm Nguyệt Tông a."Ma đạo xâm lấn?"Giấc mộng của ta, không phải liền là Hợp Hoan Tông thường ngày sao.------ -----------Main tu công pháp cần song tu nên có nhiều nữ.----------------- ',
            view: 43432,
            genre: {
                name: 'Tiêp hiệp',
                slug: '/genre/tien-hiep-342'
            }
        },
    ]

    const renderNovel = () => {
        if (hotNovel.length) {
            return hotNovel.map((el, index) => {
                return (
                    <NovelHorizontalType1
                        id={el.id}
                        key={index}
                        title={el.title}
                        view={el.view}
                        thumbnail={el.thumbnail}
                        genre={el.genre}
                        className={classnames('h-100', {
                            'mb-2': index !== hotNovel.length - 1
                        })}
                    />
                )
            })
        }
    }

    return (
        <Container className="pb-5">
            <section className="seciton-hero my-3 mt-4 row">
                <div className="section-hero-banner col-lg-8 col-12">
                    <div className="overflow-hidden position-relative rounded shadow">
                        <Slider/>
                    </div>
                </div>
                <div className="section-hero-hot col-lg-4 col-4 d-none d-lg-block">
                    <section className="d-flex flex-column justify-content-between h-100">
                        { renderNovel() }
                    </section>
                </div>
            </section>
            <section className="mt-5">
                <Recommend/>
            </section>
            <section className="mt-5">
                <NewUpdate/>
            </section>
            <section className="mt-5">
                <NovelCharts/>
            </section>
        </Container>
    )
}


export default Home