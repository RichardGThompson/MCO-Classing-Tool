export interface TextInputProps {
    id: string;
    label: string;
    fullWidth?: boolean;
    disabled?: boolean;
    error?: boolean;
    onChange?: (event: any) => void;
    type?: 'text' | 'number';
    required?: boolean;
}