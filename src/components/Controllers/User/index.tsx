import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Status,
  Content,
  Header,
  Title,
  Label,
  Info,
  Footer,
  OrderStyleProps
} from './styles';

export type UserProps = OrderStyleProps & {
  name: string;
  email: string;
  cellphone: string;
  id: string;
};

type Props = {
  data: UserProps;
};

export function User({ data }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Status status={data.status} />

      <Content>
        <Header>
          <Title>{data.name}</Title>
          <MaterialIcons
            name="verified-user"
            size={24}
            color={theme.COLORS.PRIMARY}
          />
        </Header>

        <Footer>
          <Info>
            <MaterialIcons name="email" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {data.email}
            </Label>
          </Info>

          <Info>
            <MaterialIcons name="signal-cellular-alt" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {data.cellphone}
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}