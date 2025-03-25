import './Navbar.css';

function Navbar() {
    function home() {
        window.scrollTo({ top: 0, behavior: 'smooth', block: 'start' });
    };
    function aboutMe() {
        const aboutMeElement = document.getElementById('aboutMe');
        window.scrollTo({ top: aboutMeElement.offsetTop - 300, behavior: 'smooth', block: 'start' });

    };
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a onClick={home}>Home</a></li>
                <li><a onClick={aboutMe}>About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li className="resume"><a href="#">Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;