import React, { useRef } from "react";
import './product_listing.css';
import first_image from './images/first_image.png';
import second_image from './images/second_image.png';
import third_image from './images/third_image.png';
import fourth_image from './images/fourth_image.png';
const ProductListing = () => {
    const myDivRef = useRef(null);

    const handleScroll = (scrollOffset) => {
        if(myDivRef.current){
            myDivRef.current.scrollLeft += scrollOffset;
        }
        
      };

    return (
        <div className="listing_page">
            <div className="listing_top">
                <div className="left_top">
                    <span className="small_star_listing_top">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0L12.789 9.21102L22 11L12.789 12.789L11 22L9.21102 12.789L0 11L9.21102 9.21102L11 0Z" fill="black" />
                        </svg>
                    </span>
                    <h2 className="new_product_heading">New products</h2>
                    <hr className="top_line_listing" />
                </div>
                <div className="right_top">
                    <button onClick={() => handleScroll(-50)}>
                        <svg className="left_arrow" width="56" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z" fill="#161615" />
                        </svg>
                    </button>
                    <span className="between_arrow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button onClick={() => handleScroll(50)}>
                        <svg className="right_arrow" width="56" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z" fill="#161615" />
                        </svg>
                    </button>
                </div>

            </div>


            <div className="body_listing">
                <div className="categories">
                    <span><a href="">Apparel</a></span>
                    <span style={{ fontSize: 30 }}><a href="">Accessories</a></span>
                    <span><a href="">Best Sellers</a></span>
                    <span><a href="">50% off</a></span>
                </div>
                <div className="product_list" ref={myDivRef}>


                    {newFunction(first_image)}
                    {newFunction(second_image)}
                    {newFunction(third_image)}
                    {newFunction(fourth_image)}
                    



                </div>
            </div>
            <div className="bottom_arrow">
                    <button onClick={() => handleScroll(-50)}>
                        <svg className="left_arrow" width="56" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z" fill="#161615" />
                        </svg>
                    </button>
                    <span className="between_arrow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button onClick={() => handleScroll(50)}>
                        <svg className="right_arrow" width="56" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z" fill="#161615" />
                        </svg>
                    </button>
                </div>
        </div>
    )
};
export default ProductListing;

function newFunction(image_name) {
    return <div className="product_1">
        <div className="product_image">
            <svg className="arrow_tilt" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="45" height="45" fill="#161615" />
                <path d="M28.9959 29.1648C28.9995 24.0427 28.9811 19.5589 29 15C23.8819 15.0036 19.3859 15.0186 14.8347 15.0041C14.8291 16.3618 14.8272 17.4011 14.8221 18.7218C17.5043 18.7288 20.315 18.7218 22.6435 18.7221L14.3068 27.0585C13.8958 27.4698 13.8981 28.2202 14.3117 28.6341L15.3657 29.688C15.7796 30.1019 16.5303 30.1043 16.9414 29.6932L25.278 21.3568C25.2744 23.9613 25.2817 26.5655 25.2703 29.17C26.5249 29.1631 27.8909 29.1692 28.9959 29.1648Z" fill="white" />
            </svg>
            <img className="product_photo" src={image_name} alt="Product" />


        </div>

        <div className="product_description">
            <span className="desc_1">Florida Jacket</span>
            <span className="desc_2">Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</span>
            <span className="desc_3">$100</span>
        </div>

    </div>;
}
