import React from 'react';
import styled from 'styled-components';

import { Container, Heading, Screen, utils } from 'styled-minimal';
import CustomCalendar from 'components/CustomCalendar';

const Header = styled.div`
  margin-bottom: ${utils.spacer(3)};
`;

export default class Private extends React.PureComponent {
  render() {
    return (
      <Screen key="Private" data-testid="PrivateWrapper">
        <Container verticalPadding>
          <Header>
            <Heading>Calendar</Heading>
          </Header>
          <CustomCalendar />
        </Container>
      </Screen>
    );
  }
}

