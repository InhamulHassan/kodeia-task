function Header() {
  return (
    <header className="flex flex-row items-center justify-between h-16 px-4 py-2">
      <h1 className="text-left text-lg font-bold">Dashboard</h1>
      <img src="images/user.jpg" className="h-8 w-8 rounded-full shadow-sm" alt="User Avatar" />
    </header>
  );
}

export default Header;
