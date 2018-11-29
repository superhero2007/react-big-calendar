import React from 'react';
import styled from 'styled-components';

import { Container, Heading, Screen, utils } from 'styled-minimal';

const Header = styled.div`
  margin-bottom: ${utils.spacer(3)};
  text-align: center;
`;

const Private = () => (
  <Screen key="Private" data-testid="PrivateWrapper">
    <Container verticalPadding>
      <Header>
        <Heading>Welcome!</Heading>
      </Header>
    </Container>
  </Screen>
);

export default Private;
