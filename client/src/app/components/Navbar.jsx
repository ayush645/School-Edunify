// Importing the Link component from Next.js
import Link from "next/link";

// Importing styles for the Navbar component
import styles from "./Navbar.module.css";

// Navbar component containing navigation links
const Navbar = () => {
  return (
    // Navigation container with the applied styles
    <nav className={styles.navbar}>
      {/* Logo with a link to the home page */}
      <div className={styles.logo}>
        <Link href="/">Home</Link>
      </div>
      {/* Links to different pages */}
      <div className={styles.links}>
        {/* Link to the "Add School" page */}
        <Link href="/addSchool">Add School</Link>
        {/* Link to the "Show Schools" page */}
        <Link href="/showSchools">Show Schools</Link>
      </div>
    </nav>
  );
};

// Exporting the Navbar component as the default export
export default Navbar;
