const Button = ({setCount, count}) => {
    return(
        <div>
            <button onClick={() => setCount(count + 2)}>My Button component</button>
        </div>
    );
};

export default Button;