import { memo } from "react";

const Button = memo(({ onClick, children }) =>{
    
    console.log("RenderingButton ", children);
    
    return <button onClick={onClick}>{children}</button>;
} )


export default Button;
