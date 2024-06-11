import React, { useState, useEffect } from 'react';

const CreditNexusDashboard = () => {
  
  const [bidPrice, setBidPrice] = useState(null);
  const [askPrice, setAskPrice] = useState(null);

  useEffect(() => {
    setBidPrice(100);
    setAskPrice(110);
  }, []);

  // Inline styles for the components
  const dashboardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const headerFooterStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff'
  };

  const sectionStyle = {
    width: '80%',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc'
  };

  return (
    <div style={dashboardStyle}>
      {/* Header */}
      <header style={headerFooterStyle}>
        <div className="logo">Credit Nexus</div>
        <div className="profile-icon">User</div>
      </header>

      {/* Market Overview */}
      <div style={sectionStyle}>
        <h2>Market Overview</h2>
      </div>

      {/* Trading Panel */}
      <div style={sectionStyle}>
        <h2>Trading Panel</h2>
        <button>D2C</button>
        <button>D2D</button>
        <button>IDB</button>
      </div>

      {/* Dynamic Pricing */}
      <div style={sectionStyle}>
        <h2>Dynamic Pricing</h2>
        <p>Bid Price: ${bidPrice}</p>
        <p>Ask Price: ${askPrice}</p>
      </div>

      {/* Additional Features */}
      <div style={sectionStyle}>
        <h2>Additional Features</h2>
      </div>

      {/* Footer */}
      <footer style={headerFooterStyle}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Help Center</a>
      </footer>
    </div>
  );
}

export default CreditNexusDashboard;
