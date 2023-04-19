import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';


export default function Section() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://moviesapi.ir/api/v1/movies?page=10')
            .then(res => res.json()).then(res => setProduct(res.data.sort(() => 0.5 - Math.random())))

    }, [])
    return (
        <section className="">
            <div id="top-slider" className="right-slider text-right  overflow-hidden">

                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="snipTrans"
                >
                    {product.map(item => <SwiperSlide className='w-100'>

                        <div className="d-flex flex-row-reverse align-items-center ">
                            <div className="top-left-slider col-8 p-3">
                                <h2 className="pt-4 " id="titleSlider">{item.title}</h2>
                                <p className="m-0 h5" id="descSlider">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vero sunt vero assumenda harum!
                                </p>
                                <div className="data pb-4">
                                    <i className="fa fa-calendar"></i>
                                    <div className="">
                                        <p className="m-0 h5">انتشار :</p>
                                        <p className="m-0 h5" id="dataSlider">{item.year}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="top-right-slider col-4">
                                <img src={item.poster} alt="" className="w-100" id="imgSlider" />
                            </div>
                        </div>
                    </SwiperSlide>
                    )}
                </Swiper>




            </div>
            <div className="bottom-slider col-12 px-0">

                <div className="bottom-right-slider">
                    <div className="">
                        <i className="fa fa-edit"></i>
                        <Link to={'/archive'} className="">ارشیو فیلم ها</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
