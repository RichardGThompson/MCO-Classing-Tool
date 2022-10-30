import { DropdownSelectOption } from "./dropdown-select-option.interface";

export interface DropdownSelectProps {
    label: string;
    id: string;
    options: Array<DropdownSelectOption>;
    value?: string | number;
    defaultValue?: string | number;
    onChange?: (event: any) => void;
    onOpen?: (event: any) => void;
    onClose?: (event: any) => void;
    displayEmpty?: boolean;
    open?: boolean;
    variant?: 'filled' | 'outlined' | 'standard';
    classes?: any;
}