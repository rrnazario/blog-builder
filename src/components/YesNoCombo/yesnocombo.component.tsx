import { FormControl, InputLabel, Select, SxProps } from "@mui/material";
import { useState } from "react";

interface YesNoComboItem {
    value: number,
    label: string
}

interface YesNoComboProps {
    label: string,
    id: string,
    onChange: (e?: number) => Promise<void>,
    sx?:SxProps
}

export default function YesNoCombo({ onChange, label, id, sx }: YesNoComboProps) {
    const [value, setValue] = useState<number>(-1);

    const internalChange = async (value: any) => {
        await setValue(value.target.value);
        await onChange(value.target.value)
    }

    return <FormControl variant="standard">
        <InputLabel>{label}</InputLabel>
        <Select
            native
            key={'id-yes-no-combo'}
            onChange={internalChange}
            id={id}
            value={value}
            label={'Teste'}
            sx={sx ?? { width: 400 }}
            inputProps={{
                name: 'type-interval',
                id: 'type-id-interval',
                shrink: 'true'
            }}
        >
            <option aria-label="None" value="-1" />
            <option value={'0'}>Não</option>
            <option value={'1'}>Sim</option>
        </Select>
    </FormControl>
}