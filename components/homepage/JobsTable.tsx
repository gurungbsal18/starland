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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import JobsData from "../data/JobsData";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

export default function JobsTable(props: { title: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedJob, setSelectedJob] = useState<any>();
  const [searchQuery, setSearchQuery] = useState("");

  const filterJobs = JobsData.filter((job) =>
    job.position.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <div className="mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 tems-center mb-5 gap-4 lg:gap-32">
          <h4 className="col-span-1 lg:col-span-6 primary text-3xl lg:text-4xl text-center lg:text-start font-bold">
            {props.title}
          </h4>
          <div className="flex gap-2 items-center col-span-1 lg:col-span-6">
            <Input
              label="Search jobs by title"
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
                  <TableCell>{job.position}</TableCell>
                  <TableCell>{job.totalHiring}</TableCell>
                  <TableCell>{job.salary}</TableCell>
                  <TableCell>{job.status}</TableCell>
                  <TableCell>
                    <Button>Apply</Button>
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              {selectedJob && (
                <>
                  <ModalHeader>Title: {selectedJob.position}</ModalHeader>
                  <ModalBody className="font-bold">
                    Salary: {selectedJob.salary}
                  </ModalBody>
                  <ModalBody className="job-modal-content">
                    <p className="font-bold">Description:</p>
                    {selectedJob.description && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedJob.description,
                        }}
                      />
                    )}
                    <p className="font-bold">Responsibility</p>
                    {selectedJob.responsibility && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedJob.responsibility,
                        }}
                        className="job-responsibility"
                      />
                    )}
                  </ModalBody>
                  <ModalFooter>
                    <Button onPress={onClose}>Close</Button>
                  </ModalFooter>
                </>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
