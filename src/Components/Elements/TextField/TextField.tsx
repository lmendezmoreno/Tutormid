import React, { ChangeEvent, useState } from 'react';
import { ContainerTextField, Input, ContainerInput } from './Style';

/*
    ===================COMO USAR ICONOS===================
    Si quiere agregar un icono, es obligatorio tambien enviar la propiedad "edge=*"

    <TextField
        icon={<Heart />}
        edge="end"
        label="Nombre"
    />
*/

interface IProps {
    classes?: string;
    icon?: JSX.Element | null;
    edge?: 'start' | 'end' | null;
    placeholder?: string;
    label?: string;
    type?: 'text' | 'number' | 'email' | 'password' | 'date';
    name: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    isReadOnly?: boolean;
}

const TextField = ({ classes="", icon=null, edge=null, placeholder="", label, type="text", name, handleChange, defaultValue="", isReadOnly=false }: IProps): JSX.Element => {

    const [isFocus, setIsFocus] = useState<boolean>(false);

    return <ContainerTextField
        className={classes}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
    >

        { label ? <span>{label}</span> : null }

        <ContainerInput
            isFocus={isFocus}
            edge={edge}
        >
            { edge === 'start' ? icon : null }

            <Input
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={handleChange}
                defaultValue={defaultValue}
                readOnly={isReadOnly}
            />

            { edge === 'end' ? icon : null }
        </ContainerInput>
    </ContainerTextField>
}

export default TextField;