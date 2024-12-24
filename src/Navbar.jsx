import './Navbar.css';

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <header className="header">
      <a href="/" className="logo">&#128126;</a>

      <nav className="navbar">
        <a onClick={() => scrollToSection(refs.introRef)}>Home</a>
        <a onClick={() => scrollToSection(refs.aboutRef)}>About</a>
        <a onClick={() => scrollToSection(refs.expRef)}>Experience</a>
        <a onClick={() => scrollToSection(refs.projectsRef)}>Projects</a>
      </nav>
    </header>
  );
};

export default Navbar;
