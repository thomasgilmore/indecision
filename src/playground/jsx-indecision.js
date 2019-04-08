console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands of a computer',
    options: []
}


const onFormSubmit = (e) => {       // e stores the information that comes back when submitted
    e.preventDefault();         //prevent full page refresh

    const option = e.target.elements.option.value;     //e.target point to the element that the event started on

    if(option){
        app.options.push(option);          // push user input to the app.options array
        e.target.elements.option.value = '';    // wipe out the text field after getting the input
        render();
    }
};

const onMakeDecision = () => {

    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);

};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>

            <button onClick={onRemoveAll}>Remove All</button>
        
            <ol>
                {
                    app.options.map((each) => <li key={each}>{each}</li>)
                }
            
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};



render();