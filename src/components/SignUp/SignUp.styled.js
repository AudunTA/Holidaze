import styled from "styled-components";

const SignUpModal = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 50px;
  border: 1px solid var(--border-color);
  background-color: white;
  border-radius: var(--main-border-radius);

  .options-container {
    display: flex;
    justify-content: space-between;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    background-color: var(--text-color-highlight);

    .btn-LogIn {
      cursor: pointer;
      padding: 0 90px;
      white-space: nowrap;
      border-bottom: ${(props) =>
        props.active ? "" : "1px solid var(--border-color)"};
      border-top-left-radius: 11px;
      border-right: ${(props) =>
        props.active ? "1px solid var(--border-color)" : ""};
      background-color: ${(props) => (props.active ? "white" : "none")};
      border-top-right-radius: ${(props) => (props.active ? "7px" : "0px")};
    }

    .btn-SignUp {
      cursor: pointer;
      padding: 0 90px;
      white-space: nowrap;
      border-bottom: ${(props) =>
        props.active ? "1px solid var(--border-color)" : ""};
      border-left: ${(props) =>
        props.active ? "none" : "1px solid var(--border-color)"};
      background-color: ${(props) => (props.active ? "none" : "white")};
      border-top-right-radius: 7px;
      border-top-left-radius: ${(props) => (props.active ? "0px" : "7px")};
    }
  }
  .content-modal {
    margin: 15px;
  }
`;

export { SignUpModal };
