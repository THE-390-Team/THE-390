import Carousel from 'react-bootstrap/Carousel';
import property from './property.jpeg';
import property1 from './property1.png';
import property2 from './property2.jpeg';



function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <div className="carousel-image-container" style={{ width: '100%', overflow: 'hidden', paddingTop: '56.25%'}}>
                    <img
                        src={property}
                        alt="First slide"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                </div>

                <Carousel.Caption style={{ fontSize: '20px' }}>
                    <h3>CondoCare</h3>
                    <p>Where Comfort meets Convenience</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image-container" style={{ width: '100%', overflow: 'hidden', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                    <img
                        src={property1}
                        alt="First slide"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                </div>
                <Carousel.Caption style={{ fontSize: '20px' }}>
                    <h3>Find your perfect fit</h3>
                    <p>Discover the range of Condo options available</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image-container" style={{ width: '100%', overflow: 'hidden', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                    <img
                        src={property2}
                        alt="First slide"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                </div>
                <Carousel.Caption style={{ fontSize: '20px' }}>
                    <h3>Coast To Coast Property Management</h3>
                    <p>Providing quality management service since 2024 </p>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;