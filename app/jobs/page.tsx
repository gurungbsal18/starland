import React from "react";
import JobsData from "@/components/data/JobsData";
import { Button } from "@heroui/button";

export default function JobsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold my-8">Jobs</h1>
      {JobsData.length > 0 ? (
        <div className="grid grid-cols-12 gap-4">
          {JobsData.map((list) => (
            <div
              key={list.id}
              className="col-span-3 bg-slate-200 rounded-md p-4 shadow-md"
            >
              <h4 className="primary font-bold text-2xl mb-2">
                {list.position}
              </h4>
              <p className="text-black">NPR {list.salary}</p>
              <span className="flex justify-between mt-4">
                <Button>View Detail</Button>
                <Button color="primary">Apply</Button>
              </span>
            </div>
          ))}
        </div>
      ) : (
        <>No Dat Found</>
      )}
    </div>
  );
}
