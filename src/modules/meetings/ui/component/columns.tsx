"use client"
import {format} from "date-fns"
import humanizeDuration from "humanize-duration"
import { ColumnDef } from "@tanstack/react-table"
import GenerateAvatar from "@/components/generate-avatar"
import { Badge} from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { 
  CircleCheckIcon,
  CornerDownRightIcon,
  CircleXIcon,
  ClockArrowUpIcon,
  ClockFadingIcon,
  LoaderIcon,

 } from "lucide-react"
import { MeetingGetMany } from "../../types"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

function formatDuration(seconds: number) {
  return humanizeDuration(seconds * 1000, {
    largest: 1,
    round: true,
    units: ["h ","m", "s"],
  });
};
const statusIcon = {
  "upcoming": ClockArrowUpIcon,
  "processing": LoaderIcon,
  "completed": CircleCheckIcon,
  "cancelled": CircleXIcon,
  "active": LoaderIcon,
};

const statusColorMap = {
  "upcoming": "bg-yellow-500/20 text-yellow-800 border-yellow-800/5",
  "active": "bg-blue-500/20 text-blue-800 border-blue-800/5",
  "completed": "bg-emerald-500/20 text-emerald-800 border-emerald-800/5",
  "cancelled": "bg-rose-500/20 text-rose-800 border-rose-800/5",
  "processing": "bg-gray-300/20 text-gray-800 border-gray-800/5",
}

export const columns: ColumnDef<MeetingGetMany[number]>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => 
    <div className="flex flex-col gap-y-1">
      <span className="font-semibold capitalize">
         {row.original.name}
      </span>
       
            <div className="flex items-centre gap-x-2">
              <div className="flex items-center gap-x-1">
                <CornerDownRightIcon className="text-3 text-muted-foreground max-w-[200px] truncate capitalize"/>
                <span className="text-sm text-muted-foreground">
                    {row.original.agent.name} </span>
                </div>
                </div>
        </div>
   
    
  },
  {
    accessorKey: "meetingCount",
    header: "Meetings",
    cell: ({ row }) => (
      
        <Badge
          variant="outline"
          className="flex items-center gap-x-2 [&>svg]:size-4"
        >
          <VideoIcon className="text-blue-700" />
          {row.original.meetingCount} {row.original.meetingCount === 1 ? "Meeting" : "Meetings"}
        </Badge>
      
    )
  }
]