const Navbar = () => {
    return ( 
        <nav class="navbar">
        <div class="navbar-logo"><img src="logo.png" alt="" width="50"/></div>
        <ul class="navbar-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <a href="/login" class="btn-login">Login</a>
        </ul>
    </nav>
     );
}
 
export default Navbar;