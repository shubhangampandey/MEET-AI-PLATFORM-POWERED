import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { AgentGetOne } from "../../types";
import GenerateAvatar from "@/components/generate-avatar";
import { Badge } from "@/components/ui/badge";
import { VideoIcon, CornerDownRightIcon } from "lucide-react";

export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => (
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-x-2">
          <GenerateAvatar seed={row.getValue("name")} variant="botttsNeutral" className="size-6" />
          <span className="font-semibold capitalize">{row.getValue("name")}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <CornerDownRightIcon className="text-3 text-muted-foreground max-w-[200px] truncate capitalize" />
          <span className="text-sm text-muted-foreground">{row.getValue("instructions")}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "meetingCount",
    header: "Meetings",
    cell: ({ row }) => (
      <Badge variant="outline" className="flex items-center gap-x-2 [&>svg]:size-4">
        <VideoIcon className="text-blue-700" />
        {row.getValue("meetingCount")} {row.getValue("meetingCount") === 1 ? "Meeting" : "Meetings"}
      </Badge>
    ),
  },
];