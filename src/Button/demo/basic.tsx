import React from 'react';
import { Button } from 'hy-ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="danger">Danger Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </div>
);

export default App;
