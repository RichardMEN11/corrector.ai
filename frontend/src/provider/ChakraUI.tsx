import React, { ReactElement } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

interface ChakraUIProviderProps {
  children: React.ReactNode;
}

export const ChakraUIProvider = ({
  children,
}: ChakraUIProviderProps): ReactElement => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
