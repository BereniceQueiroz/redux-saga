import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { components } from 'assets';
import Logo from 'components/misc/Logo';
import { Wrapper, Message, Menu } from './styles';

function Header() {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Wrapper>
      <header>
        <Message>
          <ul>
            <li>Quer comprar pelo whatsapp? Clica aqui</li>
            <li>Frete grátis acima de R$99</li>
          </ul>
        </Message>
        <Menu>
          <div>Menu</div>
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/carrinho-de-compras">
            <components.ShopBag />
            <span>{cartSize} itens</span>
          </Link>
        </Menu>
      </header>
    </Wrapper>
  );
}

export default Header;
