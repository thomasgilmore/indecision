// stateless functional component


class IndecisionApp extends React.Component {
    constructor(ps) {
        super(ps);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {

        }

        console.log('fetching data');
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;       //false - delete all of the matching item, true - won't delete anything
            })
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {       //check for duplicate, index find the duplicate and return index number, if none, return -1
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }
    render() {

        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    optionTitle={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}


const Header = (p) => {
    return (
        <div>
            <h1>{p.title}</h1>
            {p.subtitle && <h2>{p.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

// stateless functional component
const Action = (p) => {
    return (
        <div>
            <button
                onClick={p.handlePick}
                disabled={!p.hasOptions}
            >
                What Should I Do?
            </button>
        </div>
    );
};

const Options = (p) => {
    return (
        <div>
            <button onClick={p.handleDeleteOptions}>Remove All</button>
            {p.optionTitle.length === 0 && <p>Please add an option to get started!</p>}
            {
                p.optionTitle.map((each) => (
                    <Option
                        key={each}
                        eachText={each}
                        handleDeleteOption={p.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.optionTitle.map((each) => <Option key={each} eachText={each} />)}
//             </div>
//         );
//     }
// }

const Option = (p) => {
    return (
        <div>
            {p.eachText}
            <button
                onClick={(e) => {
                    p.handleDeleteOption(p.eachText)
                }}
            >
                remove
            </button>
        </div>
    );
};


class AddOptions extends React.Component {
    constructor(ps) {
        super(ps);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));
        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (p) => {
//     return (
//         <div>
//             <p>Name: {p.name}</p>
//             <p>Age: {p.age}</p>
//         </div>
//     );
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));