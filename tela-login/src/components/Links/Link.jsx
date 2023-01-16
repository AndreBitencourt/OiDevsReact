function Link(props){
    return(
    <>
    <a href={props.href} className="recuperar_senha">{props.content}</a>
    </>
    )        
}

export default Link