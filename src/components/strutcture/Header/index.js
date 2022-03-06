import { Link } from 'react-router-dom';
import { components } from 'assets';
import Logo from 'components/misc/Logo';
import * as S from './styles';

function Header() {
  return (
    <S.Wrapper>
      <header>
        <S.Message>
          <ul>
            <li>Quer comprar pelo whatsapp? Clica aqui</li>
            <li>Frete grátis acima de R$99</li>
          </ul>
        </S.Message>
        <S.Menu>
          <div>Menu</div>
          <Link to="/">
            <Logo />
          </Link>
          <components.ShopBag />
        </S.Menu>
      </header>
    </S.Wrapper>
  );
}

export default Header;
