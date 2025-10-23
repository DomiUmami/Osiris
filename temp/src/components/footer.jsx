import "../styles/Footer.css";

function Footer() {

  return (
    <footer className="footer">
        <p>
    Find me:{" "}
    <a href="https://www.linkedin.com/in/dominikwilliams/">
      LinkedIn
    </a>
  </p>
        <p>
  Contact me:
  {" "}
  <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=duminimum@gmail.com&su=Hello&body=I%20saw%20your%20portfolio..."
      target="_blank"
      rel="noopener noreferrer"
  >
    duminimum@gmail.com
  </a>
</p>

        
        </footer>
  );
}

export default Footer;