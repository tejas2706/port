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
import image31 from './images/31.jpeg';
import image32 from './images/32.jpeg';
import image33 from './images/33.jpeg';
import image34 from './images/34.jpeg';
import image35 from './images/35.jpeg';
import image36 from './images/36.jpeg';
import image37 from './images/37.jpeg';
import image38 from './images/38.jpeg';
import image39 from './images/39.jpeg';
import image40 from './images/30.jpeg';

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
                            <a target="_blank" href={image1} rel="noreferrer"><img src={image1} alt="image1" className="gallery_images_small"></img></a>
                            <a target="_blank" href={image2} rel="noreferrer"><img src={image2} alt="image2" className="gallery_images_small"></img></a>
                            <a target="_blank" href={image3} rel="noreferrer"><img src={image3} alt="image3" className="gallery_images_small"></img></a>
                            <a target="_blank" href={image4} rel="noreferrer"><img src={image4} alt="image4" className="gallery_images_small"></img></a>
                            <a target="_blank" href={image5} rel="noreferrer"><img src={image5} alt="image5" className="gallery_images_small"></img></a>
                            <a target="_blank" href={image6} rel="noreferrer"><img src={image6} alt="image6" className="gallery_images_small"></img></a>
                            <a target="_blank" href={image7} rel="noreferrer"><img src={image7} alt="image7" className="gallery_images_small"></img></a>
                            <a target="_blank" href={image8} rel="noreferrer"><img src={image8} alt="image8" className="gallery_images_small"></img></a>
                        </div>
                        <br></br>
                        <h5 className="view_btn" onClick={() => setviewAll(true)}><i>View More</i></h5>
                    </> :
                    <div className="gallery__viewAllDiv">
                        <div className="gallery__viewAll">
                            <a target="_blank" href={image1} rel="noreferrer"><img src={image1} alt="image1" className="gallery_images"></img></a>
                            <a target="_blank" href={image2} rel="noreferrer"><img src={image2} alt="image2" className="gallery_images"></img></a>
                            <a target="_blank" href={image3} rel="noreferrer"><img src={image3} alt="image3" className="gallery_images"></img></a>
                            <a target="_blank" href={image4} rel="noreferrer"><img src={image4} alt="image4" className="gallery_images"></img></a>
                            <a target="_blank" href={image5} rel="noreferrer"><img src={image5} alt="image5" className="gallery_images"></img></a>
                            <a target="_blank" href={image6} rel="noreferrer"><img src={image6} alt="image6" className="gallery_images"></img></a>
                            <a target="_blank" href={image7} rel="noreferrer"><img src={image7} alt="image7" className="gallery_images"></img></a>
                            <a target="_blank" href={image8} rel="noreferrer"><img src={image8} alt="image8" className="gallery_images"></img></a>
                            <a target="_blank" href={image9} rel="noreferrer"><img src={image9} alt="image9" className="gallery_images"></img></a>
                            <a target="_blank" href={image10} rel="noreferrer"><img src={image10} alt="image10" className="gallery_images"></img></a>
                            <a target="_blank" href={image11} rel="noreferrer"><img src={image11} alt="image11" className="gallery_images"></img></a>
                            <a target="_blank" href={image12} rel="noreferrer"><img src={image12} alt="image12" className="gallery_images"></img></a>
                            <a target="_blank" href={image13} rel="noreferrer"><img src={image13} alt="image13" className="gallery_images"></img></a>
                            <a target="_blank" href={image14} rel="noreferrer"><img src={image14} alt="image14" className="gallery_images"></img></a>
                            <a target="_blank" href={image15} rel="noreferrer"><img src={image15} alt="image15" className="gallery_images"></img></a>
                            <a target="_blank" href={image16} rel="noreferrer"><img src={image16} alt="image16" className="gallery_images"></img></a>
                            <a target="_blank" href={image17} rel="noreferrer"><img src={image17} alt="image17" className="gallery_images"></img></a>
                            <a target="_blank" href={image18} rel="noreferrer"><img src={image18} alt="image18" className="gallery_images"></img></a>
                            <a target="_blank" href={image19} rel="noreferrer"><img src={image19} alt="image19" className="gallery_images"></img></a>
                            <a target="_blank" href={image20} rel="noreferrer"><img src={image20} alt="image20" className="gallery_images"></img></a>
                            <a target="_blank" href={image21} rel="noreferrer"><img src={image21} alt="image21" className="gallery_images"></img></a>
                            <a target="_blank" href={image22} rel="noreferrer"><img src={image22} alt="image22" className="gallery_images"></img></a>
                            <a target="_blank" href={image23} rel="noreferrer"><img src={image23} alt="image23" className="gallery_images"></img></a>
                            <a target="_blank" href={image24} rel="noreferrer"><img src={image24} alt="image24" className="gallery_images"></img></a>
                            <a target="_blank" href={image25} rel="noreferrer"><img src={image25} alt="image25" className="gallery_images"></img></a>
                            <a target="_blank" href={image26} rel="noreferrer"><img src={image26} alt="image26" className="gallery_images"></img></a>
                            <a target="_blank" href={image27} rel="noreferrer"><img src={image27} alt="image27" className="gallery_images"></img></a>
                            <a target="_blank" href={image28} rel="noreferrer"><img src={image28} alt="image28" className="gallery_images"></img></a>
                            <a target="_blank" href={image29} rel="noreferrer"><img src={image29} alt="image29" className="gallery_images"></img></a>
                            <a target="_blank" href={image30} rel="noreferrer"><img src={image30} alt="image30" className="gallery_images"></img></a>
                            <a target="_blank" href={image31} rel="noreferrer"><img src={image31} alt="image30" className="gallery_images"></img></a>
                            <a target="_blank" href={image32} rel="noreferrer"><img src={image32} alt="image30" className="gallery_images"></img></a>
                            <a target="_blank" href={image33} rel="noreferrer"><img src={image33} alt="image30" className="gallery_images"></img></a>
                            <a target="_blank" href={image34} rel="noreferrer"><img src={image34} alt="image30" className="gallery_images"></img></a>
                            <a target="_blank" href={image35} rel="noreferrer"><img src={image35} alt="image30" className="gallery_images"></img></a>
                            <a target="_blank" href={image36} rel="noreferrer"><img src={image36} alt="image30" className="gallery_images"></img></a>
                            <a target="_blank" href={image37} rel="noreferrer"><img src={image37} alt="image30" className="gallery_images"></img></a>
                            <a target="_blank" href={image38} rel="noreferrer"><img src={image38} alt="image30" className="gallery_images"></img></a>
                            <a target="_blank" href={image39} rel="noreferrer"><img src={image39} alt="image30" className="gallery_images"></img></a>
                            <a target="_blank" href={image40} rel="noreferrer"><img src={image30} alt="image30" className="gallery_images"></img></a>
                        </div>
                        <br></br><br></br>
                        <h5 className="view_btn" onClick={() => setviewAll(false)}>View Less</h5>
                    </div>
            }
        </div>
    )
}

export default Gallery
