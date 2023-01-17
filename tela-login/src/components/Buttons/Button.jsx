function Button({value, onClick}){
return(
    <>
    <button className="submit" onClick={onClick}> {value} </button>
    </>
)
}

export default Button