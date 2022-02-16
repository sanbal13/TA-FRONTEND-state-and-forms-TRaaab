function Header(props) {
    let index=props.index;
    return <ol className="flex header">
        <li><span className={index === 0 ? "active" : "number"} >{index > 0 ? "✔" : 1 }</span>Sign Up</li>
        <li><span className={index === 1 ? "active" : "number"}>{index > 1 ? "✔" : 2 }</span>Message</li>
        
        <li><span className={index === 2 ? "active" : "number"}>{index > 2 ? "✔" : 3 }</span>Checkbox</li>        
    </ol>
}

export default Header;