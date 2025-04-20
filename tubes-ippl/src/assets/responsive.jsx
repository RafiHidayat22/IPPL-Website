import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Responsive() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return null;
}

export default Responsive;
