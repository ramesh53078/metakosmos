import React,{useState , useEffect} from 'react'
import Pic from 'assets/img/Suit-Tile-Logo.gif';
import UserGuideImage from 'assets/img/userguide/UserGuide.png';
import UserGuideVideo from 'assets/Kosmosuit.mp4';
// import PictureImage2 from 'assets/img/downloads/Picture2.png';

import { Card, CardHeader, CardBody, Row, Col,CardTitle,Table } from "reactstrap";

function UserGuide() {
  const [videoWidth, setVideoWidth] = useState(700);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the width based on the screen width
      const screenWidth = window.innerWidth;
      const newVideoWidth = Math.min(screenWidth, 700); // Set a maximum width of 700
      setVideoWidth(newVideoWidth);
    };

    // Set initial width on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
              <Card>
                  <CardHeader>
                    <h3>DEMO USER VIDEO</h3>
                    
                  </CardHeader>
                  <CardBody  style={{textAlign:'center'}}>
                  {/* <img style={{marginBottom:'7%'}} src={UserGuideImage}></img> */}
                  {/* <video width={videoWidth} height={'auto'} controls autoPlay muted>
                    <source src={UserGuideVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}

                  <iframe
                    width={videoWidth}
                    height={500}
                    src="https://www.youtube.com/embed/0jKWYI3xLSo"
                    title="YouTube Video"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>

                   <Row className='flex-end'>
                    <Col md="4">
                        <h2>DEVELOPERS</h2>
                    </Col>
                    <Col md="4">
                        <h2>SUPPORT</h2>
                    </Col>
                    <Col md="4">
                        <h2>PARTNERSHIP</h2>
                    </Col>
    
                   </Row>
                   <br></br><br></br>
                   
               
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </>
      )
}

export default UserGuide
