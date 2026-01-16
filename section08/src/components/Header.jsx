import './Header.css'

const Header = () => {


    return <div className="Header">
        <div className="rkskek"><h3>오늘은 🗓️</h3></div>
        <h1>{new Date().toDateString()}</h1>
        
    </div>;
    
}

export default Header;