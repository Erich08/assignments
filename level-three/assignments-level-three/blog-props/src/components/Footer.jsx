import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className='footer--container'>
        <div className='footer--icons'>
          <ul>
            <li>
              <FaTwitter size={65} />
            </li>
            <li>
              <FaFacebook size={65} />
            </li>
            <li>
              <FaGithub size={65} />
            </li>
          </ul>
        </div>
        <p>Copyright &copy; Your Website 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
