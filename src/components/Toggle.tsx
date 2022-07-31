/**
 * @file This is the theme chaning toggle which will update the ThemeProvider
 * on toggle
 * @author Kenny Yen
 */
import Styled from "styled-components";

const Toggle = ({ toggleTheme }: any) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

// Styling
const Button = Styled.button`
  background: ${({ theme }) => theme.body};
  border: 2px solid #dadce0;
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.8rem;
`;

export default Toggle;
