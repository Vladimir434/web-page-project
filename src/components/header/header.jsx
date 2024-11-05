import './header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className="header__logo"><img src={logo} alt="" /></div>
        <nav className="nav">
          <a href="#">Гдавная</a>
          <a href="#">О нас</a>
          <a href="#">Корзина</a>
          <a href="#">Магазин</a>
        </nav>
        <button className="btn">Войти</button>
      </div>
    </header>
  )
}
export default Header