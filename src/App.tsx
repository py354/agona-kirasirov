import React, {useState} from 'react';

function randProc(): string {
    const proc = 20 + Math.floor(Math.random() * 60)
    return `${proc}%`
}

class ClassComponent extends React.Component<any, any> {
    state = {counter: 0}
    clickHandler = () => {
        this.setState((prevState: any) => {
            return {counter: prevState.counter + 1}
        })
    }

    render() {
        console.log("render class component");
        return (
            <div style={{
                background: "aqua"
            }}>
                <h3>Счет: {this.state.counter}</h3>
                <button onClick={this.clickHandler} style={{
                    position: "absolute",
                    width: '100px',
                    height: '30px',
                    top: randProc(),
                    left: randProc(),
                }}>Нажми
                </button>
            </div>
        );
    }
}

function FunctionComponent() {
    const [text, setText] = useState('');
    const changeHandler = (e: any) => {
        console.log(`${text} => ${e.target.value}`)
        const newText: string = e.target.value;
        if (newText.length > text.length) {
            const randChar = String.fromCharCode(Math.floor(33 + Math.random() * 93));
            setText(text + randChar)
        } else {
            setText(newText);
        }
    }

    return <div>
        <label>Попробуй печатать <input type={text} onChange={changeHandler} value={text}/></label>
    </div>
}

function App() {
    return (
        <div className="App">
            <ClassComponent></ClassComponent>
            <FunctionComponent></FunctionComponent>
        </div>
    );
}

export default App;
