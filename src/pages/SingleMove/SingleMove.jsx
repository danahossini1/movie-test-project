import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
// import './SingleMove.css'
import Header from '../../Components/Header'
import Scroll from '../../Components/Scroll'
import Aside from '../../Components/Aside'
import Footer from '../../Components/Footer'


export default function SingleMove() {


    const [move, setMove] = useState({ genres: [''], images: [''] })
    const [isLoading, setIsLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const params = useParams()

    useEffect(() => {
        
        let local = JSON.parse(localStorage.getItem('userlogin'))
        local && setIsLogin(true)

        window.scroll('0', '0')

        fetch(`https://moviesapi.ir/api/v1/movies/${params.moveID}`)
            .then(res => res.json())
            .then(res => setMove(res))
    }, [params])


    return (
        <div>
            <div className="container-fluid px-0 ">
                <Scroll />
                {/* Header  */}
                <Header />
                {/* End Header  */}
                {/* Main  */}
                <div className={`${!isLoading ? '' : 'd-none'}`} style={{ margin: '100px auto', width: 100, minHeight: '40vh' }}>
                    <div style={{ width: 50, height: 50 }} className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                <main className={`${isLoading ? '' : 'd-none'} container d-flex gap-4 flex-column flex-lg-row align-items-start`}>
                    <div className={`col-12 col-lg-8 mt-5`}>

                        {/* details film  */}
                        <section className="border rounded-sm ">
                            <div className="d-flex align-items-center justify-content-between py-2 px-2 px-md-4 border-bottom">
                                <p className="m-0" style={{ fontSize: '2rem' }}>{move.title}</p>
                                <div className="film-item-date d-flex align-items-center justify-content-between text-secondary">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <i className="fa fa-calendar"></i>
                                        <p className="m-0 mr-2">تاریخ انتشار :</p>
                                    </div>
                                    <p className="m-0">{move.year}</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-center p-4">
                                <div className="w-75  overflow-hidden my-4">
                                    <img onLoad={() => setIsLoading(true)} src={move.poster} alt="" width="90%" />
                                </div>
                                <div className="">
                                    <p className={`${isLoading ? '' : 'd-none'} text-justify`}>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                        است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                        فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                        زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
                                        نرم افزارها شناخت بیستری را برای طراحان رایانه ای و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                                        در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ
                                        به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                                        دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی
                                        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                                        مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                                        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                                        آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیستری را برای
                                        طراحان رایانه ای و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
                                        تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایصلی و
                                        جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                </div>
                                <div className="w-75 d-flex justify-content-between overflow-hidden my-4">
                                    {move.images && move.images.map((item, index) => <img key={index} src={item} width="30%" height='150px' />)}

                                </div>
                                <div className="w-25 align-self-end">
                                    <button className="btn btn-danger w-100">خرید</button>
                                </div>
                            </div>
                        </section>
                        {/* end details film  */}

                        {/* key words  */}
                        <section>
                            <div className="w-100 border rounded-sm py-2 px-3 d-flex flex-wrap align-items-center justify-content-start mt-2"
                                style={{ gap: '0.3rem' }}>
                                {move.genres.map((item, index) => <button key={index} className="btn btn-sm btn-dark">{item}</button>)}
                            </div>
                        </section>
                        {/* end key words  */}
                        {/* comment  */}
                        <section>
                            <div className="d-flex flex-column align-items-start  border rounded-sm mt-4 ">
                                <div className="d-flex align-items-center justify-content-between w-100 py-2 px-3 border-bottom">
                                    <div className="d-flex align-items-center justify-content-start text-secondary"
                                        style={{ gap: '0.4rem' }}>
                                        <i className="fa fa-comment fa-2x"></i>
                                        <h6 className="m-0">دیدگاه کاربران</h6>
                                    </div>
                                    <div className="badge badge-danger py-3 px-4 text-white">25 دیدگاه</div>
                                </div>
                                <div className="  w-100">
                                    <div
                                        className="border rounded-sm d-flex flex-column align-items-start justify-content-start m-2 p-3 ">
                                        <div className="d-flex align-items-start justify-content-start">
                                            <div className="rounded-sm overflow-hidden " style={{ width: '70px', height: '60px', marginLeft: '25px' }}>
                                                <img src="../public/img/medi.jpg" width="100%" height="100%" />
                                            </div>
                                            <div className="mr-2 text-right text-secondary">
                                                <p className="m-0">مهدی ایلخانی نسب</p>
                                                <p className="mt-2">1401/02/08</p>
                                            </div>
                                        </div>
                                        <div className="my-1">
                                            <p className="text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                                                با استفاده از
                                                طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون ولورم ایپسوم متن
                                                ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                                چاپگرها
                                                و متون بلکه روزنامه و مجله در ستون و
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100 text-right my-4">
                                    <h6 className=" py-3 px-4 border-bottom w-100">
                                        شما هم دیدگاه خود را ارسال کنید
                                    </h6>
                                    <div className="">
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <form action=""
                                                className="d-flex align-items-start justify-content-between flex-wrap w-50 px-4 "
                                                style={{ gap: '0.5rem' }}>
                                                <input type="text" name="" id="" placeholder="نام و نام خانوادگی"
                                                    className="form-control" />
                                                <input type="email" name="" id="" placeholder="ایمیل" className="form-control" />
                                                <div className="d-flex align-items-center justify-content-between w-100"
                                                    style={{ gap: '1rem' }}>
                                                    <input type="text" name="" id="" placeholder="کد امنیتی"
                                                        className="form-control" />
                                                    <div
                                                        className="border rounded-sm d-flex justify-content-center align-items-center w-25 py-2">
                                                        12345
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-50 pl-4">
                                                <textarea name="" id="" cols="25" rows="6"
                                                    className="w-100 form-control"></textarea>
                                            </div>
                                            <div className="w-100 px-4 mt-2">
                                                {isLogin ?
                                                    <button className="btn btn-success w-100">ثبت دیدگاه شما </button>
                                                    :
                                                    <Link to='/register'><button className="btn btn-success w-100">برای ثبت نظر ثبت نام کنید</button></Link>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End comment  */}
                    </div>
                    {/* Aside  */}
                    <div className={`${isLoading ? '' : 'd-none'} col-lg-4`}>
                        <Aside />
                    </div>
                    {/* End Aside  */}
                </main>
                {/* End Main  */}
                {/* Footer  */}
                <Footer />
                {/* End Footer  */}
            </div>
        </div >
    )
}
