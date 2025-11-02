import MiddleBar from "./MiddleBar/MiddleBar"
import Navbar from "./Navbar"
import TopBar from "./TopBar/TopBar"

const Header = () => {
  return (
    <>
      <TopBar />
      <MiddleBar />
      <Navbar/>
    </>
  )
}

export default Header
