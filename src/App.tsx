import Repositories from "./components/DashBoardComponents/Repositories"
import Sidebar from "./components/DashBoardComponents/SideBar"


function App() {

  return (
   <div className="flex bg-blue-50">
   <div className="hidden lg:flex">
   <Sidebar/>
    </div>
   <div className=" flex lg:ml-[20%] rounded-xl w-[90%] lg:w-4/5 justify-center"><Repositories/></div>
   </div>
  )
}

export default App
