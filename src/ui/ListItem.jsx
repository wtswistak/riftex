function ListItem({platform}) {
  return (
    <a className="flex items-center mb-1 py text-lg py-0.5 relative group " href={platform.id}>
      <span className="mr-2 text-xl  ">{platform.logo}</span> <p>{platform.name}</p>
      <span className="absolute bottom-[-2px] left-[-2px] w-0 h-[2px] bg-[var(--c-green)] transition-all group-hover:w-full"></span>
    </a>
  )
}

export default ListItem
