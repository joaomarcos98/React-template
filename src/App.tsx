import "./styles/app.css";
import reactImg from "./assets/react.png";

const App = () => {
    return (
        <div className="app">
            <img src={reactImg} alt="Logo do React" />
            <h1>Hello World</h1>
        </div>
    )
};

export { App };
