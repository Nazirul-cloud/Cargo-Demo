import React from 'react';
import style from './Banner.module.css'

const Banner = () => {
    return (
      <div className="ftco-blocks-cover-1">
        <div className={`${style.overlay} ftco-cover-1`}>
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-lg-6 text-white">
                <h1>Transportations &amp; Logistics</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorem eius eligendi esse quod?</p>
                <form>
                  <div className="form-group d-flex">
                    <input type="text" className="form-control form-size mx-2" placeholder="Your tracking number"/>
                    <input type="submit" className="btn btn-primary text-white px-4" value="Track Now"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
        
    );
};

export default Banner;