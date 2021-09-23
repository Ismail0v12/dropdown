import React from 'react';
import styles from './list-item.module.css';
import {ListItemProps} from "../../interfaces";



const ListItem = ({lang, label, checked, image, id, isChecked}: ListItemProps): JSX.Element => {
    return (
        <div className={styles.list}>
            <label htmlFor={lang}><img src={image} alt={label}/>{label}</label>
            <input
                type="checkbox"
                id={lang}
                name={label}
                checked={checked}
                onChange={() => isChecked(id)}
            />
        </div>
    );
};

export default ListItem;