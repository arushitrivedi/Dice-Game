import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>Rules to play the dice game</h2>
      <div className="text">
        <p>Select a number from 1-6</p>
        <p>Click on the black dice to play the game</p>
        <p>
          If the number on the dice matches the number you had selected, you will score points equivalent to the obtained number.{" "}
        </p>
        <p>Otherwise, 2 points will get dedcuted. </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
