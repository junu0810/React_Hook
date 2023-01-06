import { useContext } from "react"
import { TestContext } from "../context/TestContext"


const Test = () => {
    const ele = useContext(TestContext)
    
    return (
        <div>
            {ele}
        </div>
    )
}

export default Test