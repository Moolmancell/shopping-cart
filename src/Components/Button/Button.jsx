export function Button(props) {
    return <button 
        data-testid="button-component" 
        className={props.className}
        onClick={props.onClick}
        aria-label={props.ariaLabel}
        title={props.title}
    >
        {props.children}
    </button>
}