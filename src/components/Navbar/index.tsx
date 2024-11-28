import './index.scss';

const styles = {
    listStyle:{
        textDecoration: "none",
        color: "white",
    }
}

interface IProps {
    companyName: string;
    isLoggedIn:boolean;
    setIsLoggedIn : (Val: boolean) => void;
}

const NavBar1 = ({companyName, isLoggedIn, setIsLoggedIn}: IProps ) =>
{
    return <nav className='navbar-list'>
        <ul style={{
            border: "1px solid purple",
            listStyle: "none",
            display: "flex",
            backgroundColor: "#bf4080",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem",
            borderRadius: 10
        }}>
            <li>
                <a href="/" style={styles.listStyle}>{companyName}</a>
            </li>
            <li>
                <a href="/" style={styles.listStyle}>home</a>
            </li>
            <li>
                <a href="/" style={styles.listStyle}>About</a>
            </li>
            <li>
                <a href="/" style={styles.listStyle}>Content</a>
            </li>
            <li>
                <button onClick={() => {
                    setIsLoggedIn(!isLoggedIn)
                }}
                >{isLoggedIn ? "Logout" : "Login"}</button>
            </li>
        </ul>
    </nav>
    
};


export default NavBar1;