/* Importing necessary dependencies and styles */
"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import SearchBox from "../components/SearchBox";

// Component for displaying schools
function ShowSchools() {
  // State for storing all schools and filtered schools based on search
  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);

  // Fetching schools data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/schools");
        const data = await response.json();
        // Adding image URLs to the schools data
        const schoolsWithImageURL = data.map((school) => ({
          ...school,
          image: `http://localhost:3001/schoolImages/${school.image}`,
        }));
        setSchools(schoolsWithImageURL);
        setFilteredSchools(schoolsWithImageURL);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };

    fetchData();
  }, []);

  // Handling search based on the input query
  const handleSearch = (searchQuery) => {
    // Filtering schools based on the search query
    const filtered = schools.filter((school) =>
      school.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSchools(filtered);
  };

  return (
    <>
      {/* Heading for the school search section */}
      <h1 className={styles.heading}>School Search</h1>
      {/* Subheading for additional information */}
      <h4 className={styles.subheading}>
        Find the right school for your child.
      </h4>
      {/* SearchBox component for input and search functionality */}
      <SearchBox onSearch={handleSearch} />
      {/* Container for displaying schools */}
      <div className={styles.container}>
        {filteredSchools.length > 0 ? (
          // Mapping through filtered schools and displaying school cards
          filteredSchools.map((school) => (
            <div key={school.name} className={styles.schoolCard}>
              {/* School image section */}
              <div className={styles.schoolImage}>
                <img src={school.image} alt={school.name} />
              </div>
              {/* School information section */}
              <div className={styles.schoolInfo}>
                <small>{school.city}</small>
                <h4>{school.name}</h4>
                <p>{school.address}</p>
              </div>
              {/* Apply Now button (commented out) */}
              {/* <button className={styles.btn}>Apply Now</button> */}
            </div>
          ))
        ) : (
          // Displaying a message when no data is available
          <p className={styles.heading}>No data</p>
        )}
      </div>
    </>
  );
}

// Exporting the ShowSchools component as the default export
export default ShowSchools;
