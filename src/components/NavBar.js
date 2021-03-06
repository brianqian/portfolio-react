import React from "react";
import styled from "styled-components";

const Component = styled.div`
  margin: 0;
  width: 3rem;
  display: flex;
  grid-row: 1;
  overflow: hidden;
  max-height: 100%;
  align-items: center;
  justify-content: center;
  justify-self: center;
  flex-direction: column;
  @media (max-width: 780px) {
    grid-column: 2;
  }
  > li {
    list-style: none;
    padding: 1rem 0;
    > img {
      cursor: pointer;
    }
  }
`;

function NavBar({ selected, scrollFn }) {
  return (
    <Component>
      <li>
        <img
          onClick={() => scrollFn(0)}
          src={`./img/circle-${selected === 0 ? "fill" : "outline"}-white.svg`}
          height="20em"
          alt=""
        />
      </li>
      <li>
        <img
          onClick={() => scrollFn(1)}
          src={`./img/circle-${selected === 1 ? "fill" : "outline"}-white.svg`}
          height="20em"
          alt=""
        />
      </li>
      <li>
        <img
          onClick={() => scrollFn(2)}
          src={`./img/circle-${selected === 2 ? "fill" : "outline"}-white.svg`}
          height="20em"
          alt=""
        />
      </li>
    </Component>
  );
}

export default NavBar;
