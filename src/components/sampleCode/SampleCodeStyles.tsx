import styled, {createGlobalStyle} from 'styled-components';
import {S_GRAY} from '../../constants/colors';

export const SampleStyles = createGlobalStyle`
  pre[class*="language-"] {
    overflow: hidden !important;
  }
  pre[class*="language-"].line-numbers {
    padding-left: 2.1rem;
    margin-top: 0;
  }
  .token.punctuation{
    color: black;
  }
  .token.tag{
    color: #ff0000;
  }
  .token.attr-name {
    color: #a52a2a;
  }
  .token.attr-value {
    color: #008000;
  }
  .line-numbers .line-numbers-rows {
    border: 0;
  }
  .line-numbers-rows > span {
    display: flex;
    white-space: nowrap;
  }
  .line-numbers-rows > span:before {
    padding-right: 2px;
    padding-left: 20px;
  }
  .line-numbers-rows > span:after {
    color: #999;
    content: '.';
  }
`;

export const Wrapper = styled.div`
  flex: 0 0 auto;
  border-radius: 8px;
  background-color: ${S_GRAY};
  overflow: hidden;
  font-size: 0.75rem;
  line-height: 2;
`;
