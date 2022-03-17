import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';

const INITISL_STATE = {
  darkMode: false
};

export const DarkModeContext = createContext(INITISL_STATE);

export const DarkModeContaxtProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITISL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
