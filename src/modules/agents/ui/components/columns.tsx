import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { AgentGetMany } from "../../types";
import GenerateAvatar from "@/components/generate-avatar";
import { Badge } from "@/components/ui/badge";
import { VideoIcon, CornerDownRightIcon } from "lucide-react";
import { Row } from "@tanstack/react-table";

export const columns: ColumnDef<AgentGetMany>[number] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }: { row: Row<AgentGetMany> }) => (
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
    cell: ({ row }: { row: Row<AgentGetMany>}) => (
      <Badge variant="outline" className="flex items-center gap-x-2 [&>svg]:size-4">
        <VideoIcon className="text-blue-700" />
        {row.getValue("meetingCount")} {row.getValue("meetingCount") === 1 ? "Meeting" : "Meetings"}
      </Badge>
    ),
  },
];