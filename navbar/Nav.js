import './Nav.css';
function Nav() {
    return(<div class="container">
    <header class="d-flex justify-content-center py-3">
    <ul class="nav nav-pills">
    <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
    <li class="nav-item"><a href="/Appoint" class="nav-link">Book an Appointment</a></li>
    <li class="nav-item"><a href="/Lab" class="nav-link">Lab Reports</a></li>
    <li class="nav-item"><a href="/Register" class="nav-link">Register</a></li>
    <li class="nav-item"><a href="/login" class="nav-link">Login</a></li>
  </ul>
</header>
</div>);
}
export default Nav;