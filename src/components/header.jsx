function Header(props) {    

    return (
        <div>
            <h1>Welcome {props.name}</h1>
            <h2>The {props.partner} is next to you</h2>
        </div>
    )
}

export default(Header)