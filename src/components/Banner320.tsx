import React, { useEffect, useRef } from 'react';

const Banner320: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current && !bannerRef.current.firstChild) {
      const confScript = document.createElement('script');
      confScript.type = 'text/javascript';
      confScript.text = `
        atOptions = {
          'key' : '28b1ef1ed72a56336e840b4f6320c007',
          'format' : 'iframe',
          'height' : 50,
          'width' : 320,
          'params' : {}
        };
      `;

      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = 'https://www.highperformanceformat.com/28b1ef1ed72a56336e840b4f6320c007/invoke.js';

      bannerRef.current.appendChild(confScript);
      bannerRef.current.appendChild(invokeScript);
    }
  }, []);

  return (
    <div className="my-4 flex justify-center items-center overflow-hidden w-full min-h-[50px]">
      <div ref={bannerRef} style={{ width: '320px', height: '50px' }} />
    </div>
  );
};

export default Banner320;
