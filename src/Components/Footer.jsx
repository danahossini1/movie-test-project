import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';

export default function Footer() {


    const [typeValue, setTypeValue] = useState('')


    return (
        <footer className="footer">
            <div id="footer"></div>
            <div className="container">
                <div className="d-flex gap-5 align-items-center justify-content-between col-12 flex-wrap">
                    <div className="footer-right col-12 col-md-5 mb-4">
                        <h5 className=""> دسترسی سریع</h5>
                        <div className="">
                            <ul className="p-0">
                                <li className=""><a href="" className="">صفحه اصلی</a></li>
                                <li className=""><a href="" className="">پیوند های سایت</a></li>
                                <li className=""><a href="" className="">فیلم سریال ها</a></li>
                            </ul>
                            <ul className="p-0">
                                <li className=""><a href="" className="">قوانین سایت</a></li>
                                <li className=""><a href="" className="">ارتباط با ما</a></li>
                                <li className=""><a href="" className="">درباره ما</a></li>
                            </ul>
                            <ul className="p-0">
                                <li className=""><a href="" className="">راهنمای سایت</a></li>
                                <li className=""><a href="" className="">لینک 1</a></li>
                                <li className=""><a href="" className="">لینک</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-left  h-100 d-flex flex-column  col-12 col-md-6 ">
                        <div className="footer-left-bottom ">
                            <p className="text-center text-md-right h1">
                                <Typewriter onInit={tyoewriter => {
                                    tyoewriter.typeString('وقتشه به فکر پیشرفت خودت باشی!')
                                        .start()
                                        .pauseFor(5000)
                                        .deleteAll()
                                        .typeString('همین الان شروع کن ... :)')
                                        .pauseFor(3000)
                                        .deleteAll()
                                }} options={{
                                    loop: true
                                }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
