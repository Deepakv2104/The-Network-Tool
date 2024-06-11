import React from 'react';

function QueryInterface({ tool }) {
  return (
    <div>
      <h2>Query Interface for {tool}</h2>
      <input type="text" placeholder={`Query for ${tool}`} />
      <button>Execute</button>
    </div>
  );
}

export default QueryInterface;