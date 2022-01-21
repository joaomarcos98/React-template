import "./styles/app.css";
import ReactThumb from "@/assets/react.png"


const App = () => {
    return (
        <div className="app">
            <img src={ReactThumb} alt="Logo do React" role="img"/>
            <h1>Welcome to React</h1>
        </div>
    )
};


export { App };
