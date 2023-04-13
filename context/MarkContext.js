import { createContext, useState } from 'react';

const MarkContext = createContext();

export const MarkProvider = ({ children }) => {
  const [MarkOutput, SetMarkOutput] = useState('... to _Preview it here_');

  return (
    <MarkContext.Provider
      value={{
        MarkOutput,
        SetMarkOutput,
      }}
    >
      {children}
    </MarkContext.Provider>
  );
};

export default MarkContext;
