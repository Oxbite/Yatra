import React from 'react';
import './faq.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';


const questions = ["What do I need to provide to a web developer to get started on my project?" ,
"How long does it take to build a website?" ,
"How much does web development cost?" ,
"What ongoing support do you provide after the website launch?",
"What type of hosting is best for my website?" ];
const answers = ["To get started on your web development project, you will need to provide us a clear understanding of your requirements and objectives. This can include design guidelines, content for the website, branding materials, target audience information, and any specific features or functionality you require.",
"The timeline for website development can vary depending on the complexity of the project and the availability of resources. Generally, a simple website can take 4-6 weeks to complete, while a more complex website or web application can take several months or longer." ,
"The cost of web development can vary widely depending on factors such as project complexity, development methodology, and developer expertise. It's important establish a clear understanding of project requirements and expectations to ensure that the cost is accurately estimated upfront.",
"It's important to establish expectations for ongoing support and maintenance with your web developer. This can include updating content, fixing bugs, and providing support for new features or functionality. you will be provided you with a service-level agreement that outlines their commitment to ongoing support and maintenance on client demand.",
"The type of hosting that is best for your website depends on your specific needs and budget. Shared hosting is a cost-effective option for small websites with low traffic, while virtual private server (VPS) hosting provides more control and resources for larger websites. Dedicated hosting is the most powerful and customizable option, but it is also the most expensive."];
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
                                    slidesPerView: 2

                                },
                                1024: {
                                    spaceBetween: 15,
                                    slidesPerView: 2

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
                                    <p className='question'>{questions[0]}</p>
                                    <p className='answertext'>{answers[0]}</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='faqbox'>
                                    <p className='question'>{questions[1]}</p>
                                    <p className='answertext'>{answers[1]}</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='faqbox'>
                                    <p className='question'>{questions[2]}</p>
                                    <p className='answertext'>{answers[2]}</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='faqbox'>
                                    <p className='question'>{questions[3]}</p>
                                    <p className='answertext'>{answers[3]}</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='faqbox'>
                                    <p className='question'>{questions[4]}</p>
                                    <p className='answertext'>{answers[4]}</p>
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