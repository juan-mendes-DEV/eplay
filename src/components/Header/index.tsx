import { CartButton, Container, Links } from './styles'
import logo from '../../assets/images/logo.png'
import { ImgLogo } from '../Hero/style'
import { Link } from 'react-router-dom'
import { open } from '../../store/redux/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderBar = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Container>
      <nav className="container">
        <Links>
          <li className="is-none">
            <Link to={'/'}>Restaurantes</Link>
          </li>
          <li>
            <Link to={'/'}>
              <ImgLogo src={logo} alt="" />
            </Link>
          </li>
          <li className="is-none-two">
            <Link to={'/'}>Restaurantes</Link>
          </li>
          <li>
            <CartButton
              onClick={() => {
                if (items.length >= 1) {
                  openCart()
                } else {
                  alert(
                    'Não a items no carrinho, primeiro adicione um item para continuar com a compra'
                  )
                }
              }}
            >
              {items.length} - Produto(s) no carrinho
            </CartButton>
          </li>
        </Links>
      </nav>
    </Container>
  )
}

export default HeaderBar
