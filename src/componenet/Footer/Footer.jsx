
const Footer = () => {
    return (
        <footer className="footer bg-black text-white  p-10">
        <aside>
        <a>
            <h2><span className='bg-blue-600 italic text-2xl text-white p-1 px-4 rounded-full'>F</span><span className='text-2xl font-semibold'>Furni<span className='text-blue-600'>Flex</span></span></h2>
        </a>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;