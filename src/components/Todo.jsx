import React from 'react';
import Button from '@atlaskit/button';
import Styled, {css} from 'styled-components';
import CheckIcon from "@atlaskit/icon/glyph/check";
import TrashIcon from "@atlaskit/icon/glyph/trash";

const ButtonStyled = Styled(Button)`
  margin-top: 5px;
  text-align: left;
  &,
  &:hover {
    ${(p) => p.iscompleted && 
      css`
        text-decoration: line-through;
      `
    }
  }

  &:hover{
    .checkIcon{
      display: inline-block;
    }
  }

  .checkIcon {
    display: none;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }

  &:hover{
    .trashIcon{
      display: inline-block;
    }
  }

  .trashIcon {
    display: none;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;

function Todo(props) {
  return (
  <ButtonStyled 
    iscompleted = {props.todo.isCompleted.toString()}
    shouldFitContainer
    iconAfter={
      // eslint-disable-next-line no-mixed-operators
      !props.todo.isCompleted &&
      <samp
        className="checkIcon"
        onClick = { () => props.onCheckBtnLick(props.todo.id)}
      >
        <CheckIcon primaryColor="#4fff4f"/>
      </samp>
      // eslint-disable-next-line no-mixed-operators
      ||
      <samp
        className="trashIcon"
        onClick = { () => props.onTrashBtnLick(props.todo.id)}
      >
        <TrashIcon primaryColor="#FF0000"/>
      </samp>
    }
    
  >
    {props.todo.name}
  </ButtonStyled>);
}

export default Todo;