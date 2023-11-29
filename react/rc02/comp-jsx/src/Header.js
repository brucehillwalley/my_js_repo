//* Harici bir dosya icerisinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima acilmis olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

import "./Header.css"
function Header() {

    //*JS alanı
    const mesaj="hello"
  return (

    <header className="header-main">
    {/* JSX alanı */}
    {console.log(mesaj)}
      <h1>Header {mesaj}</h1>
    </header>
  );
}

export default Header;
