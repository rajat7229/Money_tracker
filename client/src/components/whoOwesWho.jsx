import React from 'react';

const WhoOwesWho = ({ transactions }) => {
  const balances = {};

  transactions.forEach(t => {
    t.users.forEach(u => {
      if (!balances[u]) {
        balances[u] = 0;
      }
      balances[u] += t.amount / t.users.length;
    });
  });

  const items = Object.keys(balances).map(user => {
    return (
      <div key={user}>
        {user}: {balances[user]}
      </div>
    );
  });

  return (
    <div>
      {items}
    </div>
  );
};

export default WhoOwesWho;
