import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"

const Content = () => {

    const { isDark } =useContext(ThemeContext)

    return (
        <div 
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'white' ,
                color: isDark ? 'white' : 'black',
            }}
        >
            <p>안녕하세요 , React_use_Content 연습장입니다.</p>
        </div>
    )
}

export default Content