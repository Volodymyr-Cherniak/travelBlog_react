import React from 'react';
import image from '../img/tunisia/IMG_6097.JPG';


export const MyTrips = () => {
  return (
    <div>
      <div style={{marginTop: '10px', marginLeft: '5px'}}>
        <div className="row">
          <div className="col s12 m5">
            <div className="card">
              <div className="card-image">
                <img src={image} alt="" style={{borderRadius: '10px'}}/>
                <span className="card-title">Tunisia</span>
              </div>
              <div className="card-content">
                <p>
                  Це була наша перша спільна подорож до моря.
                  Це була наша перша спільна подорож до моря.
                  Це була наша перша спільна подорож до моря.
                  Це була наша перша спільна подорож до моря.
                  Це була наша перша спільна подорож до моря.
                  Це була наша перша спільна подорож до моря.
                  Це була наша перша спільна подорож до моря...
                </p>
              </div>
              <div className="card-action">
                <a href="/travel/:id" style={{color: '#9f9f18', fontWeight: 'bold'}}>Detail...</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};
