import React, {useState} from 'react';
import styles from './app.module.css';
import Header from "../header";
import SearchBar from "../search-bar";
import DropdownList from "../dropdownlist";
import {russian, english, spain, italy, germany, poland} from '../../assets/index';
import {ILang, ISelected} from "../../interfaces";

const App = (): JSX.Element => {
    const [lang, setLang] = useState<ILang[]>([
        {id: 1, checked: false, image: russian, lang: "russian", label: "Русский"},
        {id: 2, checked: false, image: english, lang: "english", label: "Английский"},
        {id: 3, checked: false, image: spain, lang: "spain", label: "Испанский"},
        {id: 4, checked: false, image: germany, lang: "germany", label: "Немецкий"},
        {id: 5, checked: false, image: italy, lang: "italy", label: "Итальянский"},
        {id: 6, checked: false, image: poland, lang: "poland", label: "Польский"}
    ]);
    const [term, setTerm] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<ISelected[]>([]);
    const [dropdownShow, setDropdownShow] = useState<boolean>(false);

    const searchItem = (items: ILang[], term: string) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    };


    const onSearchChange = (term: string) => {
        setTerm(term);
    };

    const isChecked = (id: number) => {
        const index = lang.findIndex(el => el.id === id);
        const oldItems = lang[index];
        const newArr = {...oldItems, checked: !oldItems.checked};
        setLang((lang) => {
            return [
                ...lang.slice(0, index),
                newArr,
                ...lang.slice(index + 1)
            ];
        });
        const newItem = {
            id: oldItems.id,
            label: oldItems.label
        };

        if (!oldItems.checked) {
            setSelectedItem((item) => {
                return [
                    ...item,
                    newItem
                ];
            });
        } else {
            setSelectedItem((item) => {
                const idx = item.findIndex((el) => el.id === id);
                return [
                    ...item.slice(0, idx),
                    ...item.slice(idx + 1),
                ];
            });
        }
    };

    const onSelectItem = (id: number) => {
        const index = selectedItem.findIndex(el => el.id === id);
        setSelectedItem((item) => {
            return [
                ...item.slice(0, index),
                ...item.slice(index + 1),
            ];
        });

        setLang((item) => {
            const index = item.findIndex(el => el.id === id);
            const oldItems = lang[index];
            const newArr = {...oldItems, checked: false};
            return [
                ...lang.slice(0, index),
                newArr,
                ...lang.slice(index + 1)
            ];
        });

    };


    const visibleItems = searchItem(lang, term);

    return (
        <div className={styles.app}>
            <Header
                onSelected={onSelectItem}
                onDropdownShow={() => setDropdownShow((d: boolean) => !d)}
                selectedItems={selectedItem}/>
            <div className={styles.app_wrapper}>
                <SearchBar onSearchChange={onSearchChange}/>
                <DropdownList isChecked={isChecked} data={visibleItems}/>
            </div>
        </div>
    );
};

export default App;