import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'


// props를 전달하는 중간 컴포넌트 
const Page = ({ isDark , setIsDark }) => {
    const data = useContext(ThemeContext);


    // 위의 데이터를 통해서 데이터를 주므로 props로 isDark를 사용안해도 된다.
    return (
        <div className="page">
            <Header />  
            <Content/>
            <Footer />
        </div>    
    )
}

export default Page