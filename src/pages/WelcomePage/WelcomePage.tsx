import * as React from 'react';

export const WelcomePage: React.FunctionComponent = () => {
  return (
    <>
      <h1>
        <span style={{ color: 'var(--purple-300)' }}>W</span>
        <span style={{ color: 'var(--cyan-300)' }}>e</span>
        <span style={{ color: 'var(--orange-400)' }}>l</span>
        <span style={{ color: 'var(--green-300)' }}>c</span>
        <span style={{ color: 'var(--red-400)' }}>o</span>
        <span style={{ color: 'var(--blue-500)' }}>m</span>
        <span style={{ color: 'var(--orange-500)' }}>e</span> page
      </h1>
    </>
  );
};
