import React, { useState} from "react";
import { useValidation } from "./useValidation";
import {IUseInput} from "../interfaces/inreface";


export const useInput = ({initialValue, validations}:IUseInput) => {
    const [value, setValue] = useState<string>(initialValue);
    const [isDirty, setDirty] = useState<boolean>(false);

    const valid = useValidation({value, validations});

    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setDirty(true);
    };
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    };
};
