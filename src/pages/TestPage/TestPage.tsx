import React, {useState} from "react";
import {SuperInput} from "../../common/SuperInput/SuperInput";
import {SuperButton} from "../../common/SuperButton/SuperButton";
import {SuperCheckbox} from "../../common/SuperCheckbox/SuperCheckbox";

export const TestPage = () => {

    const [inputValue, setInputValue] = useState('')

    const onChangeText = (value: string) => {
        setInputValue(value)
    }

    return (
        <div>
            <h1>Test page</h1>
            <div>
                <div>
                    <h2>Super Input</h2>
                    <SuperInput onChangeText={onChangeText}/>
                </div>
                <div>
                    <h2>Super Button</h2>
                    <SuperButton>Кнопка</SuperButton>
                </div>
                <div>
                    <h2>Super Checkbox</h2>
                    <SuperCheckbox/>
                </div>
            </div>

        </div>
    )
}