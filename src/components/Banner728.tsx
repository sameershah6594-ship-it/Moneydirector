import React, { useEffect, useRef } from 'react';

const Banner728: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script isn't already appended
    if (bannerRef.current && !bannerRef.current.firstChild) {
      const confScript = document.createElement('script');
      confScript.type = 'text/javascript';
      confScript.text = `
        atOptions = {
          'key' : 'c060f5177a7056171ced5eb7d122263b',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;

      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = 'https://www.highperformanceformat.com/c060f5177a7056171ced5eb7d122263b/invoke.js';

      bannerRef.current.appendChild(confScript);
      bannerRef.current.appendChild(invokeScript);
    }
  }, []);

  return (
    <div className="my-6 flex justify-center items-center overflow-hidden w-full min-h-[90px]">
      <div ref={bannerRef} style={{ width: '728px', height: '90px' }} />
    </div>
  );
};

export default Banner728;
