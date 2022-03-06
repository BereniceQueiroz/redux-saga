import { Link } from 'react-router-dom';
import { components } from 'assets';
import Logo from 'components/misc/Logo';
import { Wrapper, Message, Menu } from './styles';

function Header() {
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
          <components.ShopBag />
        </Menu>
      </header>
    </Wrapper>
  );
}

export default Header;
