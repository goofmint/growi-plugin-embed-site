import React from 'react';

import ReactDOM from 'react-dom/client';

import { EmbedOGP } from './EmbedOGP';

const href = 'https://www.youtube.com/watch?v=1Vxmsa7zhts';

const EmbedOGPCode = EmbedOGP(() => <a href={href}>OGP</a>);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EmbedOGPCode
      href={href}
    >OGP</EmbedOGPCode>
  </React.StrictMode>,
);
