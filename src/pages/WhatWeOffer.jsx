import React from 'react';
import {useEffect, useState} from "react";
import {client, urlFor} from "../client";
import {Link, useParams} from "react-router-dom";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city.mp4";
import './scss/Influencers.scss';
import {Brands, Services, Stats} from "../container";
import {FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import './scss/offer.scss'

function Influencers() {
    const [influencers, setInfluencers] = useState([]);
    const [kids, setKids] = useState([]);
    const [filterInfluencers, setFilterInfluencers] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [singleOffer, setSingleOffer] = useState(null);
    const {slug} = useParams();





    useEffect(() => {
        client.fetch(`*[_type == "offer" && slug.current == 'offer']{
            _id,
            slug,
            title,
            subTitle,
            offerDescription1,
            offerDescription2,
            offerDescription3,
            offerDescription4,
            offerDescription5,
            offerDescription6,
            offerDescription7,
            offerDescription8,
            offerDescription9,
            offerDescription10,
        }`).then((data) => setSingleOffer(data[0]))
            .catch(console.error)
    }, []);




    useEffect(() => {
        const query = '*[_type == "influencer"] | order(order asc)';

        client.fetch(query)
            .then((data) => {
                setInfluencers(data)
                // setFilterInfluencers(data)
            })

    },[])





    useEffect(() => {
        const query = '*[_type == "kids"] | order(order asc)';



        client.fetch(query)
            .then((data) => {
                setKids(data)
            })

    },[])

    if(!kids) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )

    if(!influencers) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )

    if(!singleOffer) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )


    return (

        <>
            <section id="home-4">
                <video className="home-bg-video" src={videoBgMp4} autoPlay loop muted playsInline>
                </video>

                <div id="home-overlay-2"></div>
            </section>

            <div className="map-color-3">
                <div className="">
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> What We Offer</span></h1>
                        </div>
                    </div>
                </div>
            </div>



            <div className="map-color-6">
                <div className="container">
                    <div className="row">
                        <div id="content">
                            <section id="map-section" className="inner over client-section-b">
                                <div className="row-show port-popup show-page-image-s">
                                </div>

                                <div className="desc map-color-8 container-paragraph offering-info">
                                    <div className="map-paragraph">
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title}</b></h3>


                                        {singleOffer.subTitle && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle}</h4>
                                        )}

                                        {singleOffer.offerDescription1 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription1}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.offerDescription2 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription2}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.offerDescription3 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription3}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.offerDescription4 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription4}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.offerDescription5 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription5}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.offerDescription6 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription6}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.offerDescription7 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription7}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.offerDescription8 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription8}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.offerDescription3 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription3}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.offerDescription9 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription9}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.offerDescription10 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription10}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        <div className="pricing-btn offer-button-page">
                                            <a className="btn btn-general btn-white services-button-s"
                                               href='#contact'
                                               title="Get Started" role="button">Get
                                                Started</a>
                                        </div>
                                        {/*<hr/>*/}
                                        <hr className='show-break-style'/>
                                        <div className='template-p-detail'>

                                            More information?
                                            Please contact <a
                                            className='email__design-s'
                                            href='mailto:shawn@ktmanagers.com'
                                            target='_blank'>shawn@ktmanagers.com</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Services Component */}
                            </section>
                        </div>
                    </div>
                </div>
            </div>





            <Services/>

            <div className="map-color-3">
                <div className="">
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Influencers</span></h1>
                        </div>
                    </div>
                </div>
            </div>

            <section id="portfolio">

                <div className="isotope-filters">
                    <div className="container">

                    </div>

                    {/* Portfolio items Wrapper */}
                    <section id="portfolio-wrapper">

                        <div className="container-fluid center-pics">

                            <div className="row no-gutters">

                                <div className="isotope-filters" style={{paddingLeft: '0', paddingRight: '0'}}>

                                    {influencers.map((influencer, index) => (


                                        <div key={influencer.name + index} className="col-lg-2 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom">

                                            <div className="portfolio-item portfolio-pic no-underline">



                                                <Link to={'/' + influencer.slug.current}

                                                >
                                                    <img src={urlFor(influencer.imageUrl)} className="img-responsive"
                                                         alt="portfolio 01"/>

                                                    <div className="portfolio-item-overlay margin-top-g">
                                                        <div className="portfolio-item-details text-center">
                                                            {/*Item Header*/}
                                                            <h3>{influencer.name}</h3>

                                                            {/*Item Strips*/}
                                                            <span></span>

                                                            {/*Item Description */}
                                                            <p>{influencer.description}</p>

                                                        </div>
                                                    </div>

                                                </Link>
                                            </div>
                                        </div>

                                    ))}


                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </section>


            <div className="map-color-3">
                <div className="">
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> KTM Kids</span></h1>
                        </div>
                    </div>
                </div>
            </div>


            <section id="portfolio">

                <div className="isotope-filters">
                    <div className="container">

                    </div>

                    {/* Portfolio items Wrapper */}
                    <section id="portfolio-wrapper">

                        <div className="container-fluid center-pics">

                            <div className="row no-gutters">

                                <div className="isotope-filters" style={{paddingLeft: '0', paddingRight: '0'}}>

                                    {kids.map((kid, index) => (


                                        <div key={kid.name + index} className="col-lg-2 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom">

                                            <div className="portfolio-item portfolio-pic no-underline">



                                                <Link to={'/kid/' + kid.slug.current}

                                                >
                                                    <img src={urlFor(kid.imageUrl)} className="img-responsive"
                                                         alt="portfolio 01"/>

                                                    <div className="portfolio-item-overlay margin-top-g">
                                                        <div className="portfolio-item-details text-center">
                                                            {/*Item Header*/}
                                                            <h3>{kid.name}</h3>

                                                            {/*Item Strips*/}
                                                            <span></span>

                                                            {/*Item Description */}
                                                            <p>{kid.description}</p>

                                                        </div>
                                                    </div>

                                                </Link>
                                            </div>
                                        </div>

                                    ))}

                                    {/*<Gallery withCaption>*/}
                                    {/*    <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom">*/}

                                    {/*        <div className="portfolio-item portfolio-pic no-underline">*/}

                                    {/*            <Item*/}
                                    {/*                original={images.clientTemp}*/}
                                    {/*                thumbnail={images.clientTemp}*/}
                                    {/*                width="800"*/}
                                    {/*                height="800"*/}
                                    {/*                caption="<div className='show-button'><a href='mailto:shawn@ktmanagers.com?subject=I am interested in Mimi promoting my brand' target='_blank'><button className='btn btn-client-book btn-red'>Book Mimi to promote your brand!</button></a><hr><a href='https://www.instagram.com/mimifaust' target='_blank'><button className='btn btn-social-i btn-instagram'><i className='fa fa-instagram'></i></button></a><a href='https://www.facebook.com/officialmimifaust' target='_blank'><button className='btn btn-social-i-f btn-facebook'><i className='fa fa-facebook'></i></button></a><a href='https://twitter.com/mimifaust' target='_blank'><button className='btn btn-social-i-t btn-twitter'><i className='fa fa-twitter'></i></button></a></div><hr>"*/}
                                    {/*            >*/}
                                    {/*                {({ ref, open }) => (*/}
                                    {/*                    <>*/}
                                    {/*                        <img ref={ref} onClick={open} src={images.clientTemp} />*/}

                                    {/*                    </>*/}
                                    {/*                )}*/}

                                    {/*            </Item>*/}
                                    {/*            */}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*        */}
                                    {/*</Gallery>*/}



                                </div>
                            </div>
                        </div>
                    </section>
                </div>




            </section>





        </>

    );
}

export default Influencers;