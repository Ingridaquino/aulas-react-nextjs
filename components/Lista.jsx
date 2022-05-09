export default function Lista(props) {
    return (
        <div>
            <h1>Lista</h1>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}