import React from 'react';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { appColor, headerHeight } from 'modules/theme';

import { Container, utils } from 'styled-minimal';
import Logo from 'components/Logo';

const { spacer } = utils;

const HeaderWrapper = styled.header`
  background-color: ${rgba(appColor, 0.9)};
  height: ${headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;

  &:before {
    background-color: ${appColor};
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const HeaderLogo = styled(Logo)`
  svg {
    width: 5rem;
  }
`;

const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(2)};
`;

export default class Header extends React.PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <StyledContainer>
          <HeaderLogo />
        </StyledContainer>
      </HeaderWrapper>
    );
  }
}
