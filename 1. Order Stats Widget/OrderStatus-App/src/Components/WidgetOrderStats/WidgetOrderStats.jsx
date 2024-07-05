import React from 'react';

import './WidgetOrderStats.css';
import OrderStat from '../OrderStat/OrderStat';

const WidgetOrderStats = ({ stats }) => {
  return (
    <div className="widget-order-stats">
      {stats.map((stat, index) => (
        <OrderStat
          key={index}
          label={stat.label}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}

export default WidgetOrderStats;
