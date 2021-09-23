import React from 'react';
import styles from "./header.module.css";
import {HeaderProps} from "../../interfaces";


const Header = ({selectedItems, onSelected, onDropdownShow, dropdownShow}: HeaderProps): JSX.Element => {
    const elem = selectedItems.map(item => {
        return (
            <div key={item.id}>
                <span>{item.label}</span>
                <svg onClick={() => onSelected(item.id)} width="12" height="12" viewBox="0 0 12 12" fill="#333333"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.55231 2.4477C9.81591 2.71131 9.81591 3.13869 9.55231 3.4023L6.95475 6L9.55231 8.59771C9.79394 8.83935 9.81408 9.21861 9.61272 9.48318L9.55231 9.55231C9.2887 9.81591 8.86132 9.81591 8.59771 9.55231L6 6.95475L3.4023 9.55231C3.13869 9.81591 2.71131 9.81591 2.4477 9.55231C2.1841 9.2887 2.1841 8.86132 2.4477 8.59771L5.04525 6L2.4477 3.4023C2.20607 3.16066 2.18593 2.7814 2.38729 2.51683L2.4477 2.4477C2.71131 2.1841 3.13869 2.1841 3.4023 2.4477L6 5.04525L8.59771 2.4477C8.86132 2.1841 9.2887 2.1841 9.55231 2.4477Z"/>
                </svg>
            </div>
        );
    });
    return (
        <>
            <h1 className={styles.title}>Язык</h1>
            <div className={styles.select}>
                <div className={styles.selected_items}>
                    {elem}
                </div>
                <div className={dropdownShow ? `${styles.arrow_down} ${styles.active}` : styles.arrow_down}>
                    <svg onClick={onDropdownShow} width="16" height="16" viewBox="0 0 16 16" fill="#333333"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.45442 11.8122C4.06285 12.1184 3.49722 12.0492 3.19105 11.6576C2.88488 11.2661 2.9541 10.7004 3.34566 10.3943L7.4423 7.191C7.76791 6.9364 8.22507 6.93631 8.55078 7.19078L12.6507 10.394C13.0424 10.7001 13.1119 11.2657 12.8059 11.6574C12.4998 12.049 11.9342 12.1185 11.5425 11.8125L7.99691 9.04228L4.45442 11.8122Z"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Header;