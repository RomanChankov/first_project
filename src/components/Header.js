import logo from "../images/ish.png";
import Menu from "./Menu";
import SocialIcons from "./SocialIcons";
const Header = () =>
    {
        return(
            <header className="py-1 bg-dark sticky-center">
                <div className="container d-flex justify-content-between align-items-center">
                    <img src={logo} width="90px"/>
                    <Menu />
                    <SocialIcons />
                </div>
            </header>
        )
    }

    export default Header;