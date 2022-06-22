import React, { FC } from 'react'

interface TaskForm {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    item: string,
}

const Forms: FC<TaskForm> = (props) => {
    const { item, handleChange, handleSubmit } = props;
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter the Task"
                    value={item}
                    onChange={handleChange}
                />
                <button type="submit">
                    Add Item
                </button>
            </form>
        </>
    )
}

export default Forms