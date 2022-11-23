import styled from "styled-components";

interface IContainerInput {
    isFocus: boolean;
    edge: string | null;
}

const styles = (): string => (`
    padding: 12px;
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    outline: none;
    transition: border .1s ease-in-out;

    &:focus {
        border: 2px solid #5C4D9C;
    }
`);

export const TextField = styled.input`
    ${styles()}
`;

export const TextTareaField = styled.textarea`
    ${styles()}
`;

export const ContainerTextField = styled.div`
    span {
        margin-bottom: 10px;
        display: block;
    }
`;

export const Input = styled.input`
    ${styles()}
    border: none;

    &:focus {
        border: none;
    }
`;

export const ContainerInput = styled.div`
    ${styles()}
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25ch;
    border: 2px solid ${({ isFocus }: IContainerInput) => isFocus ? '#572F90' : '#ccc'};
    ${({ edge }: IContainerInput) => edge && (edge === 'start' ? 'padding-left: 12px' : 'padding-right: 12px')};

    svg {
        cursor: pointer;
    }

    input {
        width: 100%;
    }
`;