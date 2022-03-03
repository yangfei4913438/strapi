import React from 'react';
import styled from 'styled-components';
import { Box } from '@strapi/design-system/Box';
import RegisterBackground from '../../../../assets/images/home_screenshot.jpg';

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: left top;
  filter: blur(0.1rem);
  position: fixed;
  top: 0;
  z-index: -1;
`;

const Overlay = styled(Box)`
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
`;

const Background = () => {
  return (
    <>
      <Img src={RegisterBackground} alt="register-background" />
      <Overlay width="100%" height="100%" position="fixed" zIndex={-1} />
    </>
  );
};

export default Background;
