import React from 'react';
import ListItem from "../list-item";
import {ILang} from "../../interfaces";

interface DropdownListProps {
    data: ILang[];
    isChecked: (id: number) => void;
}

const DropdownList = ({data, isChecked}: DropdownListProps): JSX.Element => {
    const elem = data.map(item => {
        const {lang, checked, label, id, image} = item;
        return (
            <ListItem
                key={id}
                id={id}
                lang={lang}
                isChecked={isChecked}
                label={label}
                checked={checked}
                image={image}/>
        );
    });


    return (
        <div>
            {elem}
        </div>
    );
};

export default DropdownList;