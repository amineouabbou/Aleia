import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../redux/slices/propertiesSlice";
import { AppDispatch, RootState } from "../redux/store";
import Card from "./Card";

const Listproperties = () => {
  const properties = useSelector(
    (state: RootState) => state.properties.entities
  );
  const loading = useSelector((state: RootState) => state.properties.loading);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="md:columns-2 lg:columns-3 gap-[18px] space-y-[18px]">
        {properties.map((property) => (
          <Card key={property.id} data={property} />
        ))}
      </div>
    </div>
  );
};

export default Listproperties;
