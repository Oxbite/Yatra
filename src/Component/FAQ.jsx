import React from 'react';
import './faq.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

export default function FAQ() {
    return (
        <>
            <div className='faq' id="faq">
                <div className="faq1">
                    <p className='faqheading'>FAQ</p>

                    <div className="faq2">

                        <Swiper className='swiper_container'
                            // install Swiper modules
                            modules={[Navigation, Pagination]}
                            breakpoints={{
                                0: {
                                    spaceBetween: 10,
                                    slidesPerView: 1

                                },
                                480: {
                                    spaceBetween: 10,
                                    slidesPerView: 1

                                },

                                550: {
                                    spaceBetween: 10,
                                    slidesPerView: 2
                                },
                                860: {
                                    spaceBetween: 15,
                                    slidesPerView: 3

                                },
                                1024: {
                                    spaceBetween: 15,
                                    slidesPerView: 4

                                },
                            }}

                            navigation
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <div className='faqbox'>
                                    <p className='question'>Question this is the question?</p>
                                    <p className='answertext'>
                                        this is the answer of the questions that have been asked too many times that it is made from
                                        faqs and this is awesome way to make people clear about the YATRA works to provide
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='faqbox'>
                                    <p className='question'>Question this is the question?</p>
                                    <p className='answertext'>
                                        this is the answer of the questions that have been asked too many times that it is made from
                                        faqs and this is awesome way to make people clear about the YATRA works to provide
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='faqbox'>
                                    <p className='question'>Question this is the question?</p>
                                    <p className='answertext'>
                                        this is the answer of the questions that have been asked too many times that it is made from
                                        faqs and this is awesome way to make people clear about the YATRA works to provide
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='faqbox'>
                                    <p className='question'>Question this is the question?</p>
                                    <p className='answertext'>
                                        this is the answer of the questions that have been asked too many times that it is made from
                                        faqs and this is awesome way to make people clear about the YATRA works to provide
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='faqbox'>
                                    <p className='question'>Question this is the question?</p>
                                    <p className='answertext'>
                                        this is the answer of the questions that have been asked too many times that it is made from
                                        faqs and this is awesome way to make people clear about the YATRA works to provide
                                    </p>
                                </div>
                            </SwiperSlide>
                            <div className="swiper-pagination"></div>

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}