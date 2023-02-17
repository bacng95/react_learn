
// ** React Imports
import { useEffect, useState } from 'react'

// ** Reactstrap import
import { Container } from "reactstrap"

// ** Components import
import Slider from '@src/components/slider'
import NovelHorizontalType1 from "@src/components/novel/NovelHorizontalType1"
import Recommend from "@src/components/recommend"
import NewUpdate from "@src/components/new-updated"
import NovelCharts from "@src/components/novel-charts"

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import {
    getNovelRecommend,
    getNovelUpdate
} from './store'


// Third paty import
import classnames from 'classnames'


const Home = () => {

    // ** Store Variables
    const dispatch = useDispatch()
    const store = useSelector(state => state.home)

    // ** Get data on Mount
    useEffect(() => {
        dispatch(getNovelRecommend())
        dispatch(getNovelUpdate())
    }, [dispatch])


    const novelNominationList = store.novelRecommend.map(el => {
        return {
            ...el,
            category: el.category[0] ?? {},
            view: el.view ?? 0
        }
    })

    const novelList = store.novelUpdate.map(el => {
        return {
            ...el,
            novel: {
                ...el.novel,
                category: el.novel.category[0] ?? {},
                view: el.novel.view ?? 0
            }
        }
    })

    const novelRecommentBanner = novelNominationList.slice(0, 3)
    const novelRecommentSection = novelNominationList.slice(3,9)


    const renderNovelTop = () => {
        if (novelRecommentBanner.length) {
            return novelRecommentBanner.map((el, index) => {
                return (
                    <NovelHorizontalType1 key={el.id}
                        novel={el}
                        className={classnames('h-100', {
                            'mb-2': index !== novelRecommentBanner.length - 1
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
                        { renderNovelTop() }
                    </section>
                </div>
            </section>
            <section className="mt-5">
                <Recommend novels={novelRecommentSection}/>
            </section>
            <section className="mt-5">
                <NewUpdate novels={novelList}/>
            </section>
            <section className="mt-5">
                <NovelCharts/>
            </section>
        </Container>
    )
}


export default Home