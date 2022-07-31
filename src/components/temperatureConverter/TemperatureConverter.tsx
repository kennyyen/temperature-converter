/**
 * @file the main Temperature Converter component file
 * @author Kenny Yen
 */
import { useState } from "react";
import Styled from "styled-components";
import CONSTANTS from "../../util/Constants";
import { celciusToF, fahrenheitToC } from "../../util/Helper";

const { TEMPERATURE_HEADER, CELCIUS, FAHRENHEIT } = CONSTANTS;

// Typings
type handleChangeProps = [value: string, callback: (value: number) => void];

const TemperatureConverter = () => {
  const [celcius, setCelcius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(32);

  /**
   * handleTemperatureChange takes in the current change event value and pass it on
   * to the callback function with a parseFloat wrapper to convert it to a float value
   * @param {string} value - the change event current value
   * @callback callback - callback function which handles the temperature changes
   */
  const handleTemperatureChange = (...[value, callback]: handleChangeProps) => {
    callback(parseFloat(value));
  };
  return (
    <Container>
      <Header>{TEMPERATURE_HEADER}</Header>
      <BodyContainer>
        <LineContainer>
          <InputField
            type="number"
            onChange={(e) =>
              handleTemperatureChange(e.target.value, (value) => {
                setFahrenheit(celciusToF(value));
                setCelcius(value);
              })
            }
            value={isNaN(celcius) ? "" : celcius}
          />
          <FieldDescription>{CELCIUS}</FieldDescription>
        </LineContainer>
        <LineContainer>
          <InputField
            type="number"
            onChange={(e) =>
              handleTemperatureChange(e.target.value, (value) => {
                setCelcius(fahrenheitToC(value));
                setFahrenheit(value);
              })
            }
            value={isNaN(fahrenheit) ? "" : fahrenheit}
          />
          <FieldDescription>{FAHRENHEIT}</FieldDescription>
        </LineContainer>
      </BodyContainer>
    </Container>
  );
};

// Styling
const Container = Styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
`;
const Header = Styled.p`
    font-size: 3rem;
    text-align: center;
`;
const BodyContainer = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: auto;
    width: fit-content;
`;
const LineContainer = Styled.div`
    display: flex;
    gap: 1rem;
    max-width: 700px;
    justify-content: flex-start
`;
const InputField = Styled.input`
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    height: 36px;
    cursor: text;
    border-radius: 6px;
    border: 1px solid #dadce0;
    background: transparent;
    padding: 0 0 0 12px;
    outline: 0;
    color: ${({ theme }) => theme.text};
`;
const FieldDescription = Styled.div`
    display: flex;
    align-items: center;
`;

export default TemperatureConverter;
