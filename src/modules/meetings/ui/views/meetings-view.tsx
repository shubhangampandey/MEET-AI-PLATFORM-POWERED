"use client";
import {useTRPC } from "@/trpc/client";
import {  useSuspenseQuery } from "@tanstack/react-query";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { DataTable } from "@/components/data-table";
import { columns } from "../component/columns";
export const MeetingsView = () => {
const trpc = useTRPC();
const {data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));
return (
  <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
    <DataTable data={data.items} columns={columns}/>
  </div>
);
};

export const MeetingsViewLoading = () => {
  return <LoadingState title="Loading Meetings" description="This may take a few seconds" />;
};

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="Error loading Meetings"
      description="Something went wrong while loading the Meetings"
    />
  );
};

