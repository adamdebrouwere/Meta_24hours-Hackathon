import "../NavBar/NavBar.scss";
import { Link } from "react-router-dom";
import home from "../../assets/icons/home.png";
import search from "../../assets/icons/search.png";
import post from "../../assets/icons/post.png"
import favorites from "../../assets/icons/heart.png";
import profile from "../../assets/icons/person.png";

export default function NavBar() {
  const icons = [
    { src: home, alt: "Home", to: "/" },
    { src: search, alt: "Search", to: "/search" },
    { src: post, alt: "Post", to: "/post" },
    { src: favorites, alt: "Favorites", to: "/favorites" },
    { src: profile, alt: "Profile", to: "/profile" },
  ];

  return (
    <div className="navBar">
      {icons.map((icon, index) => (
        <Link to={icon.to} key={index}>
          <img src={icon.src} alt={icon.alt} className="navBar-logo" />
        </Link>
      ))}
    </div>
  );
}
