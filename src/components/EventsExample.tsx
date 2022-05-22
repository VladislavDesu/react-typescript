import React, {FC, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setValue(target);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDrag(false);
    };

    const dragHandlerOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };

    const dragHandlerLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler}>Submit</button>
            <div
                onDragOver={dragHandlerOver}
                onDragLeave={dragHandlerLeave}
                onDrag={dragHandler}
                draggable
                style={{
                    transition: "background 0.15s linear",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                    width: "200px",
                    height: "200px",
                    backgroundColor: isDrag ? "indianred": "teal",
                    marginTop: "15px"
                }}>1
            </div>
            <div
                onDrag={dragHandler}
                onDragOver={dragHandlerOver}
                onDragLeave={dragHandlerLeave}
                draggable
                style={{
                    transition: "background 0.15s linear",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                    width: "200px",
                    height: "200px",
                    backgroundColor: isDrag ? "indianred": "teal",
                    marginTop: "15px"
                }}>2
            </div>
        </div>
    );
};

export default EventsExample;