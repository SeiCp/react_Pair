function Menu() {

 // Ejercicio 3
  const handleClickShowMenu = () => {
    const menu = document.querySelector('.jsx-menu');
    menu.classList.add('active');
    menu.classList.remove('hidden');

  }

  const handleClickHideMenu = () => {
    const menu = document.querySelector('.jsx-menu');
    menu.classList.add('hidden');
    menu.classList.remove('active');

  }

  return (
    <>
    <div>
      <i class="fa-solid fa-bars jsx-hamburger" onClick={handleClickShowMenu}></i>
      <div className='jsx-menu hidden'>
      <i class="fa-solid fa-arrow-left jsx-arrow"  onClick={handleClickHideMenu}></i>
        <nav>
        <ul>
            <li class="menu-item">
            <a title="Blog" class="menu-link" href="https://adalab.es/blog/">
                Blog
            </a>
            </li>
            <li class="menu-item">
            <a title="Contacto" class="menu-link" href="https://adalab.es/contacto/">
                Contacto
            </a>
            </li>
        </ul>
        </nav>       
      </div>
    </div>
    </>
  );
}

export default Menu;
