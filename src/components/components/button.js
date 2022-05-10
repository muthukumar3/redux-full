 
const Button = ({type="submit", className="btn btn-primary", name, processing = false, ...props}) => {
    return (
        <button type={type} className={`btn ${className}`} disabled={processing} {...props} >
            &nbsp;{name}
        </button>
    );
}

export default Button;