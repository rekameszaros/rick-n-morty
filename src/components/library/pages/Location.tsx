import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "../visual/CardStyle.css";
import "./CharacterPage.css";
import "./Location.css";
import Card from "../visual/Card";
import { GET_ALL_LOCATIONS } from "../queries/queries";


interface Location {
  id: string;
  name: string;
  dimension: string;
  type: string;
  created: string;
}

interface LocationsData {
  locations: {
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    };
    results: Location[];
  };
}

export default function Location() {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<LocationsData>(GET_ALL_LOCATIONS, {
    variables: { page: currentPage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleClick = (pageNumber: number) => {
    console.log("Clicked page", pageNumber);
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= data?.locations.info.pages; i++) {
    pageNumbers.push(i);
  }

  console.log("Page numbers", pageNumbers);

  return (
    <>
    <div className="bg">
      <div className="grid">
        {data?.locations.results.map((location) => (
          <Link key={location.id} to={`/locations/${location.id}`}>
            <div className="locationContainer">
              <Card
                title={location.name}
                subtitle={location.dimension}
                created={location.created}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button key={pageNumber} onClick={() => handleClick(pageNumber)}>
            {pageNumber}
          </button>
        ))}
      </div>
      </div>
    </>
  );
}
