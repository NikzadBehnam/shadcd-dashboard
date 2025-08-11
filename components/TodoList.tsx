"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { DatePicker } from "@/components/DatePicker";
import { Ban, BrushCleaning } from "lucide-react";

const data = [
  {
    id: "std-001",
    date: " ",
    title: "Complete project documentation",
    description: "Review and finalize all project documentation files",
  },
  {
    id: "std-002",
    date: "2025-03-02",
    title: "Update database schema",
    description: "Modify user table to include new authentication fields",
  },
  {
    id: "std-003",
    date: "2015-06-01",
    title: "Fix responsive design issues",
    description: "Resolve mobile layout problems on dashboard components",
  },
  {
    id: "std-004",
    date: "2015-06-01",
    title: "Implement user authentication",
    description: "Add login and registration functionality with JWT tokens",
  },
  {
    id: "std-005",
    date: "2015-06-01",
    title: "Optimize API performance",
    description: "Reduce response times for data fetching endpoints",
  },
  {
    id: "std-006",
    date: "2015-06-01",
    title: "Write unit tests",
    description:
      "Create comprehensive test coverage for utility functions and components",
  },
  {
    id: "std-007",
    date: "2015-06-01",
    title: "Setup deployment pipeline",
    description: "Configure automated CI/CD workflow for production releases",
  },
  {
    id: "std-008",
    date: "2015-06-01",
    title: "Refactor legacy code",
    description:
      "Modernize outdated components using current best practices and patterns",
  },
  {
    id: "std-009",
    date: "2015-06-01",
    title: "Add error handling",
    description:
      "Implement proper error boundaries and user feedback mechanisms",
  },
  {
    id: "std-010",
    date: "2015-06-01",
    title: "Create admin dashboard",
    description:
      "Build management interface for system administrators and moderators",
  },
  {
    id: "std-011",
    date: "2015-06-01",
    title: "Integrate payment system",
    description:
      "Setup secure payment processing with multiple gateway options",
  },
];

const TodoList = () => {
  const [filterDate, setFilterDate] = useState<Date | undefined>();

  const filteredData = data.filter((item) => {
    if (!filterDate) {
      return true;
    }
    const itemDate = new Date(item.date);
    return itemDate.toDateString() === filterDate.toDateString();
  });

  const showNoDataMessage = filterDate && filteredData.length === 0;

  return (
    <>
      <div className="flex p-4 items-center gap-2 justify-between">
        <DatePicker
          currentDate={filterDate}
          onDateChange={setFilterDate}
          title="Filter task"
        />
        <BrushCleaning
          onClick={() => setFilterDate(undefined)}
          className="cursor-pointer  mt-7"
        />
      </div>

      {showNoDataMessage && (
        <div className="flex flex-col p-4 items-center justify-center gap-2">
          <p>NO DATA FOUND FOR THE SELECTED DATE !</p>
          <Ban className="text-destructive" />
        </div>
      )}

      <ScrollArea className="h-[670px]">
        <div className="p-4">
          {filteredData.map((item) => (
            <Card key={item.id} className="flex flex-row items-center p-4 my-2">
              <Checkbox id={item.id} />
              <Label
                htmlFor={item.id}
                className="flex flex-col text-left flex-1"
              >
                <CardHeader className="font-medium text-sm w-full">
                  {item.title}
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground w-full">
                  {item.description}
                </CardContent>
              </Label>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </>
  );
};

export default TodoList;
