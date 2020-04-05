class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }

    }

    componentDidMount() {
        try {
            const count = localStorage.getItem('count');
            if (!isNaN(count)) {
                this.setState(() => ({ count: +count }))
            }
            
        } catch (e) {
            console.log('catched error', e);
        }
        
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleRemoveOne() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {

        this.setState(() => {
            return {
                count: 0
            }   
        } )
    }

    render() {
        let count = this.state.count;
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleRemoveOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<CounterApp />, document.getElementById('root'))
// const getFirstName = (fullName) => fullName.split(' ')[0];
// console.log('first name: ', getFirstName('Chukwudi Ossai'))
// let count = 0;
// const multiplier = {
//     numbers: [1, 2, 3],
//     multiplyBy: 2,
//     multiply() {
//         return this.numbers.map(number => number * this.multiplyBy);
//     }
// }

// const addOne = () => {
//     count++
//     rerenderView()

// }

// const removeOne = () => {
//     count--;
//     rerenderView();
// }

// const resetValue = () => {
//     appContent.ideas= [];
//     rerenderView()
// }

// console.log(multiplier.multiply());

// const showLocation = (location) => {
//     location ? <p>Location: {location}</p> : '';
// }

// const onFormSubmit = (e) => {
//     e.preventDefault();
//     const idea = e.target.elements[0].value;
//     appContent.ideas.push(idea);
//     e.target.elements[0].value = ''
//     rerenderView();
//     console.log(idea)
// }




// const rerenderView = () => {
//     const template = (
//         <div>
//             <h1>{appContent.title}</h1>
//             {(appContent && appContent.subTitle) && <h2>{appContent.subTitle}</h2>}
//             <button onClick={resetValue}>Reset</button>
//             {(appContent && appContent.ideas.length) ? <p>Here are you options: </p> : null}
//             {
//                 appContent.ideas.map(idea => (
//                     <p>{idea}</p>
//                 ))
//             }
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="idea" />
//                 <button>Add Idea</button>
//             </form>
//             <div>
//                 {

//                     appContent.users.map(user => (
//                         <div>
//                             <p>Count: {count}</p>
//                             <button onClick={addOne}>+1</button>
//                             <button onClick={removeOne}>-1</button>

//                             <hr></hr>

//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }

// const appRoot = document.getElementById('root');
// rerenderView();
