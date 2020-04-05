
class VisibilityToggleApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appContent: {
                title: 'Visibility Toggle',
                text: 'This is a text I am showing and hiding on button click'
            },
            isTextShowing: false
        }

        this.showHide = this.showHide.bind(this);

    }

    showHide() {
        this.setState(prevState => {
            return {
                isTextShowing: !prevState.isTextShowing
            }
        })
    } 

    render() {
        let appContent = this.state.appContent;
        let isTextShowing = this.state.isTextShowing;
        return (
            <div>
                <h1>{appContent.title}</h1>
                <button onClick={this.showHide}>{isTextShowing ? 'Hide Content' : 'Show Content'}</button>
                {isTextShowing && <p>{appContent.text}</p>}
            </div>
        )
    }
}

const appRoot = document.getElementById('root')

ReactDOM.render(<VisibilityToggleApp />, appRoot)

// let buttonText = 'Show Content';
// let isTextShowing = false;
// const appContent = {
//     title: 'Visibility Toggle',
//     text: 'This is a text I am showing and hiding on button click'
// }

// const VisibilityToggle = () => {
//     const template = (
//         <div>
//             <h1>{appContent.title}</h1>
//             <button onClick={showHide}>{isTextShowing ? 'Hide Content' : 'Show Content'}</button>
//             {isTextShowing && <p>{appContent.text}</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// const showHide = () => {
//     isTextShowing = !isTextShowing
//     VisibilityToggle();
// } 

// const appRoot = document.getElementById('root')

// VisibilityToggle();