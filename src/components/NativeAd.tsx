import React, { useEffect } from 'react';

export const NativeAd: React.FC = () => {
  useEffect(() => {
    // Check if the script is already added to head
    const existingScript = document.querySelector(
      'script[src="https://pl30668025.effectivecpmnetwork.com/2aacb088cee03f26119358e7cd48f8e2/invoke.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://pl30668025.effectivecpmnetwork.com/2aacb088cee03f26119358e7cd48f8e2/invoke.js';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="my-6 flex justify-center items-center w-full min-h-[100px] overflow-hidden">
      <div id="container-2aacb088cee03f26119358e7cd48f8e2"></div>
    </div>
  );
};

export default NativeAd;
