import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/dyhrvktyr/image/upload/v1702916207/passport_size_photo_ezg7ob.jpg"
          alt="website logo"
        />

        <button type="button" className="nav-mobile-btn">
          <img
            src="https://res.cloudinary.com/dyhrvktyr/image/upload/v1702916207/passport_size_photo_ezg7ob.jpg"
            alt="nav logout"
            className="nav-bar-img"
          />
        </button>
      </div>

      <div className="nav-bar-large-container">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/dyhrvktyr/image/upload/v1702916207/passport_size_photo_ezg7ob.jpg"
          alt="website logo"
        />
        <h1 className="my-name">Venkata Ramana</h1>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-bar-img"
          />
        </li>

        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-bar-img"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-bar-img"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
