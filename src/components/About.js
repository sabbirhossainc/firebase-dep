import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to='/'><BsFillCaretLeftFill />Go Back</Link>
        </div>
    )
}

export default About
