import React from 'react';

const TotalAmount = ({ transactions }) => {
  const totalAmount = transactions.reduce((total, t) => total + t.amount, 0);

  return (
    <div>
      Total amount spent: {totalAmount}
    </div>
  );
};

export default TotalAmount;
