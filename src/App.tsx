/**
 * @file Main file that take all wrapping components
 * @author Kenny Yen
 */
import Styled from "styled-components";
import GlobalStyle from "./globalStyled";
import TemperatureConverter from "./components/temperatureConverter/TemperatureConverter";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./util/Theme";
import CONSTANTS from "./util/Constants";
import { useDarkMode } from "./util/hooks/useDarkMode";
import Toggle from "./components/Toggle";

const { LIGHT } = CONSTANTS;

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <TemperatureConverter />
        <ToggleContainer>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </ToggleContainer>
      </>
    </ThemeProvider>
  );
}

// Styling
const ToggleContainer = Styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

export default App;
