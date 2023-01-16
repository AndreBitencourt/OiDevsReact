function Input(props) {
    return (
        <>
            <div className="card-content-area">
                <label for="{props.label}">{props.conteudo}</label>
                <input type={props.type} name="{props.label}" id="{props.label}" />
            </div>
        </>
    )
}

export default Input