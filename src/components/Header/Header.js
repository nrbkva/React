function Header(props) {
  const links = ['Главная,"Корзина","Профиль","О нас"'];
  const { title, children } = props;
  return (
    <div className="{header}">
      <div>
        {links.map((el, id) => (
          <li key={id}>{el}</li>
        ))}
      </div>
      {children}
    </div>
  );
}

export default Header;
