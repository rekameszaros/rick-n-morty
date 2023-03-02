import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import "../visual/CardStyle.css";
import './SingleLocation.css'
import Card from "../visual/Card";
import { GET_SINGLE_LOCATION } from "../queries/queries";

interface Location {
  id: string;
  name: string;
  dimension: string;
  type: string;
  created: string;
  residents: { name: string }[];
}

interface LocationData {
  location: Location;
}

export default function SingleLocation() {
  const { id } = useParams<{ id: string }>();
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery<LocationData>(GET_SINGLE_LOCATION, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const residentsPerPage = 5;
  const startIndex = (page - 1) * residentsPerPage;
  const residents = data?.location.residents.slice(
    startIndex,
    startIndex + residentsPerPage
  );

  const totalPages = Math.ceil(
    data?.location.residents.length / residentsPerPage || 1
  );

  return (
    <div className="bgSingle">
      <div className="singleLocation">
        <div key={data?.location.id} className="singleContainer">
          <Card
            title={data?.location.name}
            subtitle={data?.location.dimension}
            created={data?.location.created}
          />
        </div>
      </div>
    </div>
  );
}
