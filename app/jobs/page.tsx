"use client";
import React, { useState } from "react";
import JobsData from "@/components/data/JobsData";
import { Button } from "@heroui/button";
import JobsModal from "@/components/modal/JobsModal";

export default function JobsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleModal = (job: any) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold my-8">Jobs</h1>
      {JobsData.length > 0 ? (
        <div className="grid grid-cols-12 gap-4">
          {JobsData.map((list) => (
            <div
              key={list.id}
              className="col-span-12 md:col-span-3 bg-slate-200 rounded-md p-4 shadow-md"
            >
              <h4 className="primary font-bold text-2xl mb-2">
                {list.position}
              </h4>
              <p className="text-black">NPR {list.salary}</p>
              <p className="">Total Hiring: {list.totalHiring}</p>
              <span className="flex justify-between mt-4 gap-4">
                <Button onPress={() => handleModal(list)} className="flex-grow">
                  View Detail
                </Button>
                <Button color="primary" className="flex-grow">
                  Apply
                </Button>
              </span>
            </div>
          ))}
        </div>
      ) : (
        <>No Dat Found</>
      )}

      <JobsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        job={selectedJob}
      />
    </div>
  );
}
