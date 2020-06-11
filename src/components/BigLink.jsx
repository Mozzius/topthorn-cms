import styled from '@emotion/styled';
import { Link } from 'gatsby';

const BigLink = styled(Link)`
  background-color: ${({ theme }) => theme.blue || '#2f2d5f'};
  display: inline-block;
  align-self: center;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 19px;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

export default BigLink;
