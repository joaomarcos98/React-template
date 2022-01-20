import "./styles/app.css";


export enum Icon {
    thumb = "https://www.pinclipart.com/picdir/big/537-5374089_react-js-logo-clipart.png"
};

const App = () => {
    return (
        <div className="app">
            <img src={Icon.thumb} alt="Logo do React" />
            <h1>Hello World</h1>
        </div>
    )
};

export { App };
