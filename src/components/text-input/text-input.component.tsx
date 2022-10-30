import { TextField } from "@mui/material";
import { TextInputProps } from "./text-input.props";

export const TextInput = (props: TextInputProps) => {

    return (
        <TextField 
            id={props.id} 
            label={props.label}
            fullWidth={props.fullWidth}
            disabled={props.disabled}
            error={props.error}
            onChange={props.onChange}
            type={props.type}
            required={props.required} 
        />
    )
}