//PascalCasing used for naming functions: "Message" 
function Message() {
    // This line of Javascript is actually JSX: JavaScript XML
    const name = 'Eric';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;