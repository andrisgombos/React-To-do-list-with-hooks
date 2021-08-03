function Header(props) {    

    return (
        <div>
            <h1>Welcome {props.name}</h1>
            <h2>Help {props.partner} adding some stuff to his list</h2>
        </div>
    )
}

export default(Header)