import "../styles/SignNav.css"
const SignNav = ({signinClick,signupClick}) => {
    return (
        <div className="signnav">
            <button onClick={signinClick}>Sign In</button>
            <button onCLick={signupClick}>Sign Up</button>
        </div>
    )
}

export default SignNav
