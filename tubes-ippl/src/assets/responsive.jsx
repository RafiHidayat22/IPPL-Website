// eslint-disable-next-line
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Responsive() {
  // eslint-disable-next-line
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // eslint-disable-next-line
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  // eslint-disable-next-line
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return null;
}

export default Responsive;
