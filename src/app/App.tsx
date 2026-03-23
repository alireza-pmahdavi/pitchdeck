import React, { useEffect } from 'react';
import { PitchDeck } from '@/app/PitchDeck';

// Global Styles for fonts if needed, though Tailwind handles most.
import '@/styles/index.css'; 

export default function App() {
  useEffect(() => {
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "v4k1fmkuiu");
  }, []);

  return (
    <PitchDeck />
  );
}
