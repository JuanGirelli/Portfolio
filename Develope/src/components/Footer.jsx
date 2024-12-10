import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="border-t border-gray-600 pt-4 flex flex-col tems-center">
      <div className="flex flex-col  items-center mb-4">
        <p className='text-gray-400'>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex flex-row space-x-4">
          <a href="https://github.com/JuanGirelli" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/juan-girelli/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={32} className="hover:scale-110 transition-transform" />
          </a>
          </div>
          </div>
      </div>

    </footer>
  );
}

export default Footer;