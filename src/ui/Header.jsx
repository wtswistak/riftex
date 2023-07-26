import HeaderSearch from "./HeaderSearch"
import Logo from "./Logo"

function Header() {
  return (
    <div className="flex justify-between items-center px-7 py-6">
      <Logo/>
      <HeaderSearch/>
    </div>
  )
}

export default Header
