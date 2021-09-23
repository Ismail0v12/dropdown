export interface ISelected {
    id: number;
    label: string;
}

export interface SearchBarProps {
    onSearchChange: (term: string) => void;
}

export interface ILang {
    id: number;
    lang: string;
    checked: boolean;
    image: string;
    label: string;
}

export interface ListItemProps {
    lang: string;
    label: string;
    checked: boolean;
    image: string;
    id: number;
    isChecked: (id: number) => void;
}

export interface HeaderProps {
    selectedItems: ISelected[];
    onSelected: (id: number) => void;
    onDropdownShow: () => void;
}

