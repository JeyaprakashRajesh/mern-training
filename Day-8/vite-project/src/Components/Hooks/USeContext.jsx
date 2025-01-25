import Invigilator from "../Context_Comp/Invigilator"
import { createContext } from "react"
export const ThemeProvider = createContext()
const UseContext = () => {
    return (
        <div>
            <ThemeProvider.Provider value={{ sgpa: 9.5, cgpa: 6.5 }}>
                <h2>This is useContext Hook</h2>
                <h3>The Students are writing the exam</h3>
                <Invigilator />
            </ThemeProvider.Provider>
        </div>
    )
}
export default UseContext