import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Aside from '../../Components/Aside'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Scroll from '../../Components/Scroll'

export default function () {

    const [isLoading, setIsLoading] = useState(false)
    const [ganerMovies, setGanerMovies] = useState([])

    const params = useParams()

    useEffect(() => {
        window.scroll('0', '0')
        fetch(`https://moviesapi.ir/api/v1/genres/${params.ganerID}/movies?page=1`)
            .then(res => res.json())
            .then(res => setGanerMovies(res.data))
    }, [params])



    return (
        <div className="container-fluid px-0 ">
            <Scroll />
            {/* Header  */}
            <Header />
            {/* End Header  */}
            {/* Main  */}
            <div className="archive d-flex flex-column justify-content-center align-items-lg-start">
                <div
                    className="top-archive border-bottom w-100 d-flex align-items-center justify-content-lg-start py-2 px-4">
                    <i className="fa fa-sticky-note-o fa-2x"></i>
                    <p className="m-0 mr-2 h4">ژانر : {params.name}</p>
                </div>
            </div>
            <div className={`${!isLoading ? '' : 'd-none'}`} style={{ margin: '100px auto', width: 100 }}>
                <div style={{ width: 50, height: 50 }} className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div style={{ minHeight: '100vh' }} className={`container d-flex  gap-3 flex-column flex-lg-row align-items-start`}>
                <section className={`${isLoading ? '' : 'd-none'} col-12 col-lg-8 mt-5`}>
                    {ganerMovies.map((item, index) =>
                        <div key={index} className="film-item d-flex my-4 align-items-center justify-content-between col-12 p-0">
                            <div className=" rounded-sm col-4 p-0 overflow-hidden mr-2 d-none d-md-block">
                                <img src={item.poster} onLoad={() => setIsLoading(true)} alt="" width="80%" height="220px" className="" />
                            </div>
                            <div className="film-item-details d-flex flex-column align-items-start justify-content-center px-1 px-md-4 col-12 col-md-8">
                                <div className="film-item-title d-flex align-items-center justify-content-between w-100">
                                    <h6 className="mt-2"><Link to={`/singlemove/${item.id}`} className='Links' >{item.title}</Link></h6>
                                    <div className="film-item-date d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <i className="fa fa-calendar"></i>
                                            <p className="m-0">تاریخ انتشار :</p>
                                        </div>
                                        <p className="m-0">{item.year}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="m-0 text-right text-muted">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis unde reprehenderit libero similique, odio eaque autem perferendis repellat ipsa, molestiae suscipit quam rem dolor? Deleniti minima debitis quo illo quis!
                                    </p>
                                </div>
                                <div className="align-self-end ">
                                    <button className="btn btn-warning btn-sm text-dark "><Link className='Links' to={`/singlemove/${item.id}`}>مشاهده و خرید</Link></button>
                                </div>
                            </div>
                        </div>
                    )}



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
