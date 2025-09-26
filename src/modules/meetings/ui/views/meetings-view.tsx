"use client";
import {useTRPC } from "@/trpc/client";
import {  useSuspenseQuery } from "@tanstack/react-query";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { DataTable } from "@/components/data-table";
export const MeetingsView = () => {
const trpc = useTRPC();
const {data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));
return (
  <div className="overflow-x-scroll">
    <DataTable data={data.items}/>
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

