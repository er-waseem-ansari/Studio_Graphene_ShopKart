// import react from "react";
import './navigation.css'
import hamburger_menu from "./images/hamburger_menu.png";
const Navigation = () => {
    var wishlist_count=0;
    var bag_count=0;
    return (
        <nav className='navigation'>
            <div className="navigation_upper">
                <span className="site_logo">
                    ShopKart
                </span>

                <div className='wish_bag'>
                    <a className="bold_a" href="/">Wishlist ({wishlist_count})&nbsp;</a>
                    <a className="bold_a" href="/">Bag ({bag_count})</a>
                    <a className='hamburger_menu'><img src={hamburger_menu}/></a>
                </div>
                
            </div>
            <hr className="nav_line"/>
            <div className='navigation_lower'>
                <ul>
                    <li><a className="bold_a" href='/'>Home</a></li>
                    <li><a className="bold_a" href='/'>About</a></li>
                    <li className='dropdown'>
                        <a className="bold_a" href='/'>Our Products</a>
                        {/* <ul class="dropdown_content">
                            <li><a href="#">Product 1</a></li>
                            <li><a href="#">Product 2</a></li>
                            <li><a href="#">Product 3</a></li>
                            <li><a href="#">Product 4</a></li>
                        </ul> */}
                    </li>
                    <li><a className="bold_a" href='/'>Contact Us</a></li>
                </ul>
            </div>

        </nav>
    )
};

export default Navigation;