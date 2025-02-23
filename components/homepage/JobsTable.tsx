"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import JobsData from "../data/JobsData";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import JobsModal from "../modal/JobsModal";

export default function JobsTable(props: { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filterJobs = JobsData.filter((job) =>
    job.position.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleModal = (job: any) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  return (
    <>
      <div className="mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 tems-center mb-5 gap-4 lg:gap-32">
          <h4 className="col-span-1 lg:col-span-6 primary text-3xl lg:text-4xl text-center lg:text-start font-bold">
            {props.title}
          </h4>
          <div className="flex gap-2 items-center col-span-1 lg:col-span-6">
            <Input
              label="Search jobs by position"
              type="search"
              className="w-full"
              size="sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button size="lg" radius="sm" color="primary">
              Search
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableColumn>POSITION</TableColumn>
            <TableColumn>TOTAL HIRING</TableColumn>
            <TableColumn>SALARY</TableColumn>
            <TableColumn>STATUS</TableColumn>
            <TableColumn>ACTION</TableColumn>
          </TableHeader>

          <TableBody>
            {filterJobs.length > 0 ? (
              filterJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell
                    onClick={() => handleModal(job)}
                    className="cursor-pointer text-primary font-bold"
                  >
                    {job.position}
                  </TableCell>
                  <TableCell>{job.totalHiring} seat</TableCell>
                  <TableCell>NPR {job.salary}</TableCell>
                  <TableCell>
                    <span
                      className={`flex items-center gap-1 ${job.status === "Close" ? "text-danger" : "text-green-700"}`}
                    >
                      {job.status === "Close" ? (
                        <MdCancel />
                      ) : (
                        <IoIosCheckmarkCircle />
                      )}{" "}
                      {job.status}
                    </span>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button size="sm" onPress={() => handleModal(job)}>
                      View Detail
                    </Button>
                    <Button size="sm" color="primary">
                      Apply
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
                <TableRow>
                  <TableCell>No Data</TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </div>

      <JobsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        job={selectedJob}
      />
    </>
  );
}
