import { TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";

type LimitedTextFieldProps = TextFieldProps & {
    maxLength: number,
};

export default function LimitedTextField(props: LimitedTextFieldProps) {
    const [value, setValue] = useState();

    const onChange = async (e: any) => {

        if ((e.target.value as String).length <= props.maxLength) {
            await setValue(e.target.value);

            if (props.onChange)
                await props.onChange(e);
        }
    }

    return <TextField
        {...props}
        onChange={onChange}
        value={value}
    />
}