import React from 'react';

function Footer() {
  return (
    <>
      <div className="card w-full bg-blue-500 shadow-xl">
        <div className="card-body">
          <h2 className="text-center align-center card-title">Try Prilans for Free</h2>
          <p className="text-center">Everything you need to launch, build, and grow <br />
            your freelance career.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral btn-center">Join Now</button>
          </div>
        </div>
      </div>

      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Affiliate Program</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">How It Works</a>
          <a className="link link-hover">Business</a>
          <a className="link link-hover">Sitemap</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Projects</h6>
          <a className="link link-hover">IT & Programming</a>
          <a className="link link-hover">Design & Multimedia</a>
          <a className="link link-hover">Sales & Marketing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Freelancer</h6>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Engineering</a>
          <a className="link link-hover">Animator</a>
          <a className="link link-hover">Explore All</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email</span>
            </label>
            <div className="join">
              <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>

      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <div className="flex flex-wrap justify-center space-x-10">
              <p>Copyright © 2023 Timmo. All right reserved</p>
              <p className="underline">Privacy Policy</p>
              <p className="underline">Terms of Service</p>
              <p className="underline">Cookie Settings</p>
          </div>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
