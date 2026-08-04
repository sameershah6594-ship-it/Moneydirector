import { useEffect, useRef } from 'react';

interface AdBannerProps {
  adKey: string;
  width: number;
  height: number;
}

export default function AdBanner({ adKey, width, height }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = '';

      const confScript = document.createElement('script');
      confScript.type = 'text/javascript';
      confScript.text = `
        atOptions = {
          'key' : '${adKey}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
      `;

      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = `//www.topcreativeformat.com/${adKey}/invoke.js`;

      containerRef.current.appendChild(confScript);
      containerRef.current.appendChild(invokeScript);
    }
  }, [adKey, width, height]);

  return (
    <div className="my-6 flex justify-center items-center overflow-hidden">
      <div ref={containerRef}></div>
    </div>
  );
}
