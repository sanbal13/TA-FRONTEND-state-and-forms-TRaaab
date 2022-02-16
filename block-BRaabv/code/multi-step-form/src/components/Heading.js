function Heading(props) {
    let index = props.index;
    const heading=['Sign Up', 'Message', 'Checkbox']
    return (
        <div className="heading">
        <div className="step">Step {index+1}/3</div>
        <h2 className="main-heading">{heading[index]}</h2>
        </div>
    );
}

export default Heading;