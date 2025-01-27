import { Suspense } from "react"
import About from './../functional_comp/About'
const App = ()=>{
    return(
        <div>
        <Suspense>
            <h3>The Lazy Loading</h3>
            <About/>
        </Suspense>
        </div>
    )
}
export default App