import React, { ReactElement } from 'react';
import { ChakraUIProvider } from './ChakraUI';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps): ReactElement => {
  return <ChakraUIProvider>{children}</ChakraUIProvider>;
};
