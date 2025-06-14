import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - MY Shop</title>
        {/* Ensure all pages include necessary meta tags and stylesheets */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/globals.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link href="/">logo</Link>
            </div>
            <nav>
              <ul id="MenuItems">
                <li><Link href="/">Home</Link></li>
                <li className="dropdown">
                  <a>Products <i className="fas fa-caret-down"></i></a>
                  <ul id="inneritems">
                    <li><Link href="/moisterizers">Moisterizers</Link></li>
                    <li><Link href="/serums">Serums</Link></li>
                    <li><Link href="/cleansers">Cleansers</Link></li>
                    <li><Link href="/sunscreens">Sunscreens</Link></li>
                  </ul>
                </li>
                <li><Link href="/about" className="active">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/account">Account</Link></li>
              </ul>
            </nav>
            <div className="right-icons">
              <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button><i className="fas fa-search"></i></button>
              </div>
              <Link href="/card"><i className="fas fa-shopping-cart"></i></Link>
              <Link href="/account"><i className="fas fa-user"></i></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h2 className="title">About Our Shop</h2>
        <p>
          Welcome to MY Shop! We are dedicated to providing you with the best skincare products.
          Our mission is to educate our customers about the ingredients they put on their bodies
          and offer transparent, affordable, and high-quality solutions.
        </p>
        <p>
          We source our ingredients from across the world to ensure you receive
          only the best. Explore our wide range of products for all your skincare,
          haircare, bodycare, and lipcare needs.
        </p>
        <div className="text-center mt-8">
          <Link href="/" className="btn">Back to Home</Link>
        </div>
      </div>

      <footer className="footer">
          <div className="container-f">
            <div className="row-f">
              <div className="footer-col">
                <h4>get help</h4>
                <ul>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/shipping">shipping</Link></li>
                  <li><Link href="/returns">returns</Link></li>
                  <li><Link href="/order-status">order status</Link></li>
                  <li><Link href="/payment-options">payment options</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><Link href="/product">Our Services</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <hr />
            <div className="copyright text-center">
              <h5><Link href="/">🌐 copyright © logo.com all rights reserved</Link></h5>
            </div>
          </div>
        </footer>
    </>
  );
}
