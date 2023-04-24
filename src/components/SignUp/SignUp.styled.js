import styled from "styled-components";

const SignUpModal = styled.div`
  position: absolute;
  z-index: 3;

  right: 0;
  top: 50px;
  border: 1px solid #e2e8f0;
  border-color: hsla(0, 0%, 100%, 0.1);
  background-color: hsla(0, 0%, 100%, 0.05);
  border-radius: 1rem;
  backdrop-filter: blur(24px);

  .options-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    border-top-right-radius: var(--main-border-radius);
    border-top-left-radius: var(--main-border-radius);
    background-color: var(--text-color-highlight);
    .triangle {
      position: absolute;
      width: 0;
      height: 0;
      top: -15px;
      right: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;

      border-bottom: 15px solid black;
    }

    .btn-LogIn {
      cursor: pointer;
      padding: 0 90px;
      white-space: nowrap;
      color: var(--text-color-main);
      border-bottom: ${(props) =>
        props.active ? "" : "1px solid var(--border-color)"};
      border-top-left-radius: var(--main-border-radius);
      border-right: ${(props) =>
        props.active ? "1px solid var(--border-color)" : ""};
      background-color: ${(props) =>
        props.active ? "var(--background-color)" : "none"};
      border-top-right-radius: ${(props) => (props.active ? "7px" : "0px")};
    }

    .btn-SignUp {
      cursor: pointer;
      padding: 0 90px;
      white-space: nowrap;
      color: var(--text-color-main);
      border-bottom: ${(props) =>
        props.active ? "1px solid var(--border-color)" : ""};
      border-left: ${(props) =>
        props.active ? "none" : "1px solid var(--border-color)"};
      background-color: ${(props) =>
        props.active ? "none" : "var(--background-color)"};
      border-top-right-radius: var(--main-border-radius);
      border-top-left-radius: ${(props) => (props.active ? "0px" : "7px")};
    }
  }
  .content-modal {
    margin: 15px;
  }
`;

export { SignUpModal };
