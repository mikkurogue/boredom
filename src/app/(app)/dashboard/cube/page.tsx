import { fetchCubeJsData } from "@/lib/fetchCubeJsData";
import { Cube } from "@/lib/types/cubejs-query";
import React, { Suspense } from "react";

// placeholder, this should be placed somewhere else
// this is the RESULT of the query you want to use
// EmissionPerCustomerStruct is just a simple name and it defines the structure of the object
//
type EmissionPerCustomerStruct = {
  cube: Cube;
  customerName: string;
  allocatedEmission: number;
};

export default async function Page() {
  // we can omit the loading here if we want, as the async await is being handled by the Suspense
  // But i decided to expose the loading state in the api just incase
  const { result, error } = await fetchCubeJsData<EmissionPerCustomerStruct[]>(
    "EmissionsShipments",
    ["customerName"],
    ["allocatedEmission"],
  );

  // should use an error boundary but for POC purposes i wont lol
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        {result.map(function(item) {
          return (
            <span>
              {item.customerName}: {item.allocatedEmission}
            </span>
          );
        })}
      </Suspense>
    </div>
  );
}
