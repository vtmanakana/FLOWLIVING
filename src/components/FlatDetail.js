import React from "react";
import ImageGallery from 'react-image-gallery';
import { Link } from "react-router-dom";
import Contact from './Contact';


const FlatDetail = () => {

    const formattedPrice = (amount) => {
        return amount.toLocaleString('en-ZA', {
            style: 'currency',
            currency: 'ZAR'
        });
    };

    const images = [
        {
            original: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-c16e1613ca5a484?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/c16e1613ca5a484.jpg",
            thumbnail: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-c16e1613ca5a484?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/c16e1613ca5a484.jpg",
        },
        {
            original: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-49b3e870a154680?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/49b3e870a154680.jpg",
            thumbnail: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-49b3e870a154680?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/49b3e870a154680.jpg",
        },
        {
            original: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-83eaf551d9f7084?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/83eaf551d9f7084.jpg",
            thumbnail: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-83eaf551d9f7084?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/83eaf551d9f7084.jpg",
        },
        {
            original: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-e9ada7ba34e8b70?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/e9ada7ba34e8b70.jpg",
            thumbnail: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-e9ada7ba34e8b70?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/e9ada7ba34e8b70.jpg",
        },
        {
            original: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-ad0c0ed1072bc77?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/ad0c0ed1072bc77.jpg",
            thumbnail: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-ad0c0ed1072bc77?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/ad0c0ed1072bc77.jpg",
        },
        {
            original: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-056a1b40941c73c?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/056a1b40941c73c.jpg",
            thumbnail: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-056a1b40941c73c?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/056a1b40941c73c.jpg",
        },
        {
            original: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-4ce739f60947508?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/4ce739f60947508.jpg",
            thumbnail: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-4ce739f60947508?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/4ce739f60947508.jpg",
        },
        {
            original: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-63d1941425468ad?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/63d1941425468ad.jpg",
            thumbnail: "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-63d1941425468ad?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/63d1941425468ad.jpg",
        }
    ];

    const data = {
        "_id": "63333d2bb98f270261529d10",
        "agent": "602386722cdb39001e18da08",
        "title": "2 Bedroom Apartment in Ravenswood, Boksburg",
        "description": "Upstairs Apartment in Boksburg.\nOpen plan lounge / kitchen under tiles.\n1 Bathroom bath, basin & toilet.\nUndercover parking.\n24/7 Security.\nNeeds TLC. Open to Offers.",
        "status": "listed",
        "organisation": "61261f4cbf386a0011c59d56",
        "listingType": "sale",
        "listingSector": "residential",
        "unit": {
            "bedrooms": 2.0,
            "bathrooms": 1.0,
            "parking": 0.0,
            "price": 550000.0
        },
        "images": [
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-c16e1613ca5a484?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/c16e1613ca5a484.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-49b3e870a154680?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/49b3e870a154680.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-83eaf551d9f7084?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/83eaf551d9f7084.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-e9ada7ba34e8b70?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/e9ada7ba34e8b70.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-e8d3bf6305e1fa1?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/e8d3bf6305e1fa1.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-ad0c0ed1072bc77?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/ad0c0ed1072bc77.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-63d1941425468ad?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/63d1941425468ad.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-4ce739f60947508?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/4ce739f60947508.jpg",
            "https://s3-staging.flowliving.com/propData/1920x1080/61261f4cbf386a0011c59d56-056a1b40941c73c?resource=https://d3bcax9k86ac90.cloudfront.net/uploads/listings/2022/07/056a1b40941c73c.jpg"
        ]
    }

    return (
        <div className="flat-detail">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">DETAIL</h1>
                            <h2 className="page-description">{data.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="fd-top flat-detail-content">
                            <div>
                                <h3 className="flat-detail-title"><i className="fas fa-map-marker-alt"></i> {data.title}</h3>
                            </div>
                            <div>
                                <span className="fd-price">{formattedPrice(data.unit.price)}</span>
                            </div>
                        </div>
                        <ImageGallery flickThreshold={0.50} slideDuration={0} items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} />
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="fd-item">
                                    <h4>Description</h4>
                                    <p>{data.description}</p>
                                </div>
                                <div className="fd-item fd-property-detail">
                                    <h4>Property Overview</h4>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Property Type: </span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>{data.listingSector}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Monthly Rates</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>{formattedPrice(data.unit.price * 0.0009)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fd-item fd-property-detail">
                                    <h4>Property Features</h4>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Bedrooms: </span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>{data.unit.bedrooms}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Bathrooms</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>{data.unit.bathrooms}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Parking</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>{data.unit.parking}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fd-item">
                                    <h4>Maps</h4>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105200.564429!2d37.91245092855647!3d38.99130948591772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1630158674074!5m2!1str!2str" width="100%" height="450" loading="lazy"></iframe>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="fd-sidebar-item">
                                    <h4>{formattedPrice(data.unit.price)}</h4>
                                    <div className="recently-item">
                                        <img src={data.images[0]} alt="detail" width="50px" />
                                        <span>Agent name</span>
                                    </div>
                                    <Link to={`/flat/${data.agent}`} className="item-title">
                                        <button className="btn btn-detail">Contact Agent</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlatDetail