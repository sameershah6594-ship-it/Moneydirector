import { useEffect, useRef } from 'react';

interface AdBannerProps {
  adKey: string;
  width: number;
  height: number;
}

export default function AdBanner({ adKey, width, height }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous container content
    container.innerHTML = '';

    // Create an isolated iframe to prevent global atOptions variables from overwriting each other
    const iframe = document.createElement('iframe');
    iframe.width = `${width}`;
    iframe.height = `${height}`;
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';

    container.appendChild(iframe);

    const iframeDoc = iframe.contentWindow?.document;
    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; }</style>
          </head>
          <body>
            <script type="text/javascript">
              atOptions = {
                'key' : '${adKey}',
                'format' : 'iframe',
                'height' : ${height},
                'width' : ${width},
                'params' : {}
              };
            </script>
            <script type="text/javascript" src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
          </body>
        </html>
      `);
      iframeDoc.close();
    }
  }, [adKey, width, height]);

  return (
    <div className="my-6 flex justify-center items-center overflow-hidden min-h-[50px]">
      <div ref={containerRef} style={{ width: `${width}px`, height: `${height}px` }} />
    </div>
  );
}
