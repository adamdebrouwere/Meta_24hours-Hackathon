import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logos/Logo.png";
import "./Header.scss";


function Header() {
 const location = useLocation();
 const [activeTab, setActiveTab] = useState("forYou");
 const navigate = useNavigate();


 useEffect(() => {
   if (location.pathname.includes("forYou")) {
     setActiveTab("forYou");
   } else if (location.pathname.includes("following")) {
     setActiveTab("following");
   }
 }, [location.pathname]);


 const handleTabClick = (tab) => {
   setActiveTab(tab);
   navigate(`/${tab}`);
 };
 return (
 <header className='header'>
<Link to="/">
       <img src={logo} alt="Koala riding horses Logo" className="header__sitelogo" />
     </Link>
 <nav className="header__nav">
 <ul className="header__nav-menu">
   <li className="header__nav-menu-item">


     <button
       className={`header__nav-menu-item-link ${activeTab === "forYou" ? "header__nav-menu-item-link--active" : ""
         }`}
       onClick={() => handleTabClick("forYou")}
     >
       For you
     </button>
   </li>
   <li className="header__nav-menu-item">
     <button
       className={`header__nav-menu-item-link ${activeTab === "following" ? "header__nav-menu-item-link--active" : ""
         }`}
       onClick={() => handleTabClick("following")}
     >
       Following
     </button>
   </li>
 </ul>
</nav>
</header>
 )
}


export default Header;
