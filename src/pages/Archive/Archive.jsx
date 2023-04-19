import React, { useEffect, useState } from 'react'
import Aside from '../../Components/Aside'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Scroll from '../../Components/Scroll'




export default function Archive() {


    const [movies, setMoveis] = useState([])
    const [page, setPage] = useState(5)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.scroll('0', '0')
        fetch(`https://moviesapi.ir/api/v1/movies?page=${page}`)
            .then(res => res.json())
            .then(res => setMoveis(res.data))
    }, [page])



    return (
        <div className="container-fluid px-0 ">
            <Scroll />
            {/* Header  */}
            <Header />
            {/* End Header  */}
            {/* Main  */}
            <div className={`${!isLoading ? '' : 'd-none'}`} style={{ margin: '100px auto', width: 100 }}>
                <div style={{ width: 50, height: 50 }} className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div style={{ minHeight: '100vh' }} className={`container d-flex  gap-3 flex-column flex-lg-row align-items-start`}>
                <section className={`${isLoading ? '' : 'd-none'} col-12 col-lg-8 mt-5`}>
                    {movies.map((item, index) =>
                        <div key={index} className="d-flex flex-row-reverse align-items-center slide1">
                            <div className="top-left-slider col-8">
                                <h6 className="pt-4" id="titleSlider">{item.title}</h6>
                                <p className="m-0" id="descSlider">
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </p>
                                <div className="data pb-4">
                                    <i className="fa fa-calendar"></i>
                                    <div className="">
                                        <p className="m-0">انتشار :</p>
                                        <p className="m-0" id="dataSlider">{item.year}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="top-right-slider col-4">
                                <img src={item.poster} onLoad={() => setIsLoading(true)} alt="" className="w-100" height='230px' id="imgSlider" />
                            </div>
                        </div>
                    )}

                    <nav className="mt-4">
                        <ul className="pagination pagination-sm ">
                            <li style={{ cursor: 'pointer' }} className={`page-item  ${page === 5 && 'active'} `} onClick={() => {
                                setPage(5)
                                window.scroll('0', '0')
                            }}><p href="" className="page-link px-3 py-2">1</p></li>
                            <li style={{ cursor: 'pointer' }} className={`page-item  ${page === 7 && 'active'} `} onClick={() => {
                                setPage(7)
                                window.scroll('0', '0')
                            }}><p href="" className="page-link px-3 py-2">2</p></li>
                            <li style={{ cursor: 'pointer' }} className={`page-item  ${page === 9 && 'active'} `} onClick={() => {
                                setPage(9)
                                window.scroll('0', '0')
                            }}><p href="" className="page-link px-3 py-2">3</p></li>
                            <li style={{ cursor: 'pointer' }} className={`page-item  ${page === 4 && 'active'} `} onClick={() => {
                                setPage(4)
                                window.scroll('0', '0')
                            }}><p href="" className="page-link px-3 py-2">4</p></li>
                            <li style={{ cursor: 'pointer' }} className={`page-item  ${page === 6 && 'active'} `} onClick={() => {
                                setPage(6)
                                window.scroll('0', '0')
                            }}><p href="" className="page-link px-3 py-2">5</p></li>
                        </ul>
                    </nav>

                </section>

                {/* Aside  */}
                <div className={`w-100 ${isLoading ? '' : 'd-none'}`}>
                    <Aside />
                </div>
                {/* End Aside  */}


            </div>
            {/* End Main  */}
            {/* Footer  */}
            <Footer />
            {/* End Footer  */}
        </div >
    )
}
