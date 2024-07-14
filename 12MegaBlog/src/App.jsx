import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {Header,Footer} from './components'
import { login,logout } from "./store/authSlice"

function App() {
  // If you are using create-react-app you can acces environment variable by using "process.env.<variable_name>"
  // If you are using vite you can access environment variable using "import.meta.env.<variable_name>"
  // console.log(import.meta.env.VITE_APPWRITE_URL)

  // whenever you have to wait for database or network you should make a loading state which will do conditonal rendering using if-else
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() =>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO: {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
