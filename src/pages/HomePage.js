import React from 'react';
import 'materialize-css';
import img from "../img/632d61_761cc7806b1249b79b6a5dd8105319c6_mv2_d_5184_3456_s_4_2.jpg";


export const HomePage = () => {
  return (
    <div>


      <div>
        <img src={img} style={imStyle} alt=""/>
      </div>
    </div>
  );
};

const imStyle = {
  maxWidth: '100%',
  borderRadius: 20,
  marginTop: 10,
  marginBottom: 10
};
