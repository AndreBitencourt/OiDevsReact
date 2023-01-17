function Link(props){
    return(
    <>
    <a href={props.href} target="_blank" rel="noopener" className="recuperar_senha" >{props.content}</a>
    </>
    )        
}

export default Link