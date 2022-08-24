import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="about"><a>About</a></Link>
            <Link href="ninjas"><a>List</a></Link>
        </nav>
    );
}

export default Navbar