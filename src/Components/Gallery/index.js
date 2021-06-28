import React, { useState } from 'react';
import './styles.css';
import image1 from './images/1.jpeg';
import image2 from './images/2.jpeg';
import image3 from './images/3.jpeg';
import image4 from './images/4.jpeg';
import image5 from './images/5.jpeg';
import image6 from './images/6.jpeg';
import image7 from './images/7.jpeg';
import image8 from './images/8.jpeg';
import image9 from './images/9.jpeg';
import image10 from './images/10.jpeg';
import image11 from './images/11.jpeg';
import image12 from './images/12.jpeg';
import image13 from './images/13.jpeg';
import image14 from './images/14.jpeg';
import image15 from './images/15.jpeg';
import image16 from './images/16.jpeg';
import image17 from './images/17.jpeg';
import image18 from './images/18.jpeg';
import image19 from './images/19.jpeg';
import image20 from './images/20.jpeg';
import image21 from './images/21.jpeg';
import image22 from './images/22.jpeg';
import image23 from './images/23.jpeg';
import image24 from './images/24.jpeg';
import image25 from './images/25.jpeg';
import image26 from './images/26.jpeg';
import image27 from './images/27.jpeg';
import image28 from './images/28.jpeg';
import image29 from './images/29.jpeg';
import image30 from './images/30.jpeg';

function Gallery() {

    const [viewAll, setviewAll] = useState(null);

    return (
        <div className="Gallery" id="gallery">
            {
                !viewAll ?
                    <>
                        <div className="gallery__title allTitle">
                            Gallery<br></br><br></br>
                        </div>
                        <div className="gallery__div">
                            <img src={image1} alt="image1" className="gallery_images"></img>
                            <img src={image2} alt="image2" className="gallery_images"></img>
                            <img src={image3} alt="image3" className="gallery_images"></img>
                            <img src={image4} alt="image4" className="gallery_images"></img>
                            <img src={image5} alt="image5" className="gallery_images"></img>
                            <img src={image6} alt="image6" className="gallery_images"></img>
                            <img src={image7} alt="image7" className="gallery_images"></img>
                            <img src={image8} alt="image8" className="gallery_images"></img>

                        </div>
                        <br></br>
                        <h4 style={{ color: '#E0EAFC' }} onClick={() => setviewAll(true)}><i>View More...</i></h4>
                    </> :
                    <div className="gallery__viewAllDiv">
                        <div className="gallery__viewAll">
                            <img src={image1} alt="image1" className="gallery_images"></img>
                            <img src={image2} alt="image2" className="gallery_images"></img>
                            <img src={image3} alt="image3" className="gallery_images"></img>
                            <img src={image4} alt="image4" className="gallery_images"></img>
                            <img src={image5} alt="image5" className="gallery_images"></img>
                            <img src={image6} alt="image6" className="gallery_images"></img>
                            <img src={image7} alt="image7" className="gallery_images"></img>
                            <img src={image8} alt="image8" className="gallery_images"></img>
                            <img src={image9} alt="image9" className="gallery_images"></img>
                            <img src={image10} alt="image10" className="gallery_images"></img>
                            <img src={image11} alt="image11" className="gallery_images"></img>
                            <img src={image12} alt="image12" className="gallery_images"></img>
                            <img src={image13} alt="image13" className="gallery_images"></img>
                            <img src={image14} alt="image14" className="gallery_images"></img>
                            <img src={image15} alt="image15" className="gallery_images"></img>
                            <img src={image16} alt="image16" className="gallery_images"></img>
                            <img src={image17} alt="image17" className="gallery_images"></img>
                            <img src={image18} alt="image18" className="gallery_images"></img>
                            <img src={image19} alt="image19" className="gallery_images"></img>
                            <img src={image20} alt="image20" className="gallery_images"></img>
                            <img src={image21} alt="image21" className="gallery_images"></img>
                            <img src={image22} alt="image22" className="gallery_images"></img>
                            <img src={image23} alt="image23" className="gallery_images"></img>
                            <img src={image24} alt="image24" className="gallery_images"></img>
                            <img src={image25} alt="image25" className="gallery_images"></img>
                            <img src={image26} alt="image26" className="gallery_images"></img>
                            <img src={image27} alt="image27" className="gallery_images"></img>
                            <img src={image28} alt="image28" className="gallery_images"></img>
                            <img src={image29} alt="image29" className="gallery_images"></img>
                            <img src={image30} alt="image30" className="gallery_images"></img>
                        </div>
                        <br></br><br></br>
                        <h4 style={{ color: '#E0EAFC' }} onClick={() => setviewAll(false)}><i>View Less...</i></h4>
                    </div>
            }
        </div>
    )
}

export default Gallery
