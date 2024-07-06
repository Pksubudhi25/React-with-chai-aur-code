
function App() {
  // If you are using create-react-app you can acces environment variable by using "process.env.<variable_name>"
  // If you are using vite you can access environment variable using "import.meta.env.<variable_name>"
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
