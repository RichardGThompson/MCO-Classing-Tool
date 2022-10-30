import React from 'react';
import { DropdownSelectProps } from './dropdown-select.props';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

export const DropdownSelect = (props: DropdownSelectProps) => {

    return (
        <>
            <FormControl>
                <InputLabel>{props.label}</InputLabel>
                <Select
                    id={props.id}
                    onChange={props.onChange}
                    onOpen={props.onOpen}
                    onClose={props.onClose}
                    input={<OutlinedInput label={props.label}/>}
                    classes={props.classes}
                    sx={{minWidth: '250px'}}
                >
                    {props.options.map((option) => (
                        <MenuItem 
                            key={option.value}
                            value={option.value}
                        >
                            {option.display}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}