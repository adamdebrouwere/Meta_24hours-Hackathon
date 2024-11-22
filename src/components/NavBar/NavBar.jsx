import '../NavBar/NavBar.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const icons = [
    { src: './icons/house-solid.svg', alt: 'Home', to: '/' },
    { src: './icons/search.svg', alt: 'Search', to: '/' },
    { src: './icons/post.png', alt: 'Post', to: '/' },
    { src: './icons/heart.svg', alt: 'Favorites', to: '/' },
    { src: './icons/user.svg', alt: 'Profile', to: '/' },
  ];

  return (
    <div className="navBar">
      <div className="navBar__icon-container">
        {icons.map((icon, index) => (
          <Link to={icon.to} key={index}>
            <img src={icon.src} alt={icon.alt} className="navBar__logo" />
          </Link>
        ))}
      </div>
    </div>
  );
}
