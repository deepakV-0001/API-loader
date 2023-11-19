import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  const hideLoader = () => {
    setLoading(false);
  };

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      hideLoader();
    }, 1500); // Adjust the timeout as needed

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <div className={`loader ${loading ? 'loader--hidden' : ''}`}>
      <div className="loader__spinner"></div>
    </div>
  );
};

export default Loader;

// CSS Styles
const styles = `
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333333;
    transition: opacity 0.75s, visibility 0.75s;
  }

  .loader--hidden {
    opacity: 0;
    visibility: hidden;
  }

  .loader__spinner {
    width: 75px;
    height: 75px;
    border: 15px solid #dddddd;
    border-top-color: #009578;
    border-radius: 50%;
    animation: loading 0.75s ease infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
`;

// Inject styles into the document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
  
