import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import Logout from "../islands/logout.tsx";


type HeaderProps={
    userName: string;
}

const Header: FunctionComponent<HeaderProps> = ({userName})=>{
    return(
        <header class="header-container">
            <div class="header-content">
                <span class="user-name">{userName}</span>
                <Logout></Logout>
            </div>
        </header>
    )
}

export default Header;