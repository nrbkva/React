

function Header(props) {
  const { title } = props;
  return (
    <div className="{header}">
      <h2 className="header">{title}</h2>
    </div>
  );
}

export default Header;
