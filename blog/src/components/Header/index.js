
import logosvg from '../../svg/01.svg';

const Header = () =>{
    
    const descLogo = "essa é a logo do blog";
    
    return (
        
        <>
            <header className="flex-space-between">
                <div className="logo">
                        <img src={logosvg} alt={descLogo}/>
                </div>
                <div classNaame="search">
                <input type="text" className="input-search" name="search" />
                </div>
                <ul classNaame="menu">
                    <li><a href="#"classNaame="nav-link">Home</a></li>
                    <li><a href="#"classNaame="nav-link">Sobre</a></li>
                    <li><a href="#"classNaame="nav-link">Contato</a></li>
                </ul>
            </header>
        
        </>
    );
}

export default Header;