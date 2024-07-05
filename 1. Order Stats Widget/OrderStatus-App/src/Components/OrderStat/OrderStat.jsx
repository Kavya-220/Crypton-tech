import React, { useState, useEffect } from 'react';
import './OrderStat.css';
import data from '../../assets/data.json'; // Adjust the path as per your project structure

const OrderStat = ({ label, value, change }) => {
  const [iconSrc, setIconSrc] = useState(null);

  useEffect(() => {
    const iconPath = data.stats.find(stat => stat.label === label)?.icon;
  
    if (iconPath) {
      setIconSrc(iconPath);
    } else {
      console.error(`Icon path not found for ${label}`);
    }
  }, [label]);
  

  return (
    <div className="order-stat">
      <div className="details">
        <div className="details-top">
          <div className="label">{label}</div>
          <div className={`change ${change >= 0 ? 'positive' : 'negative'}`}>
            {change >= 0 ? `⬆ ${change}%` : `⬇ ${change}%`}
          </div>
        </div>
        <div className="details-bottom">
        <div className="icon">
            {iconSrc && <img src={iconSrc} alt={label} width={25} height={25} />}
          </div>
          <div className="value">{value}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderStat;
