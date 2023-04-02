import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import QuoteCalculator from '../components/QuoteCalculator/QuoteCalculator';
import style from '../styles/quote.module.css'

const Quote = () => {
    return (
        <div>
          <Header/>
        <div className={`${style.breadcrumbs}`}>
          <div className={`${style.overlay} ${style.page_header} d-flex align-items-center`}>
            <div className={`${style.fade} container position-relative`}>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Get a Quote</h2>
                  <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="container">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Quote</li>
              </ol>
            </div>
          </nav>
        </div>
        <QuoteCalculator/>
        <Footer/>
        </div>
    );
};

export default Quote;