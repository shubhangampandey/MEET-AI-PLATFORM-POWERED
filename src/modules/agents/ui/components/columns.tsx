"use client"

import { ColumnDef } from "@tanstack/react-table"
import { AgentGetOne } from "../../types"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
  },
  
]