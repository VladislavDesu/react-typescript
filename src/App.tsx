import React from 'react';
import Title from "./components/Title";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ClassForm from "./components/ClassForm";
import Portal from "./components/Portal";
import ContextClass from "./components/ContextClass";

const App = () => {
    return (
        <div className="App">
            <Title title="Hello World"/>
            <Counter/>
            <Form/>
            <ClassForm/>
            <Portal children={"Portal"}/>
            <ContextClass/>
        </div>
    );
};

export default App;
