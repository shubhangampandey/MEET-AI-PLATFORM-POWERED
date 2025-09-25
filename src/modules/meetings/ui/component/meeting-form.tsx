import { useTRPC } from "@/trpc/client";
import type { MeetingGetOne } from "../../types";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { meetingsInsertSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { on } from "events";
import { toast } from "sonner";
import { useState } from "react";
interface MeetingFormProps {
  onSuccess?: (id?: string) => void;
  onCancel?: () => void;
  initialValues?: MeetingGetOne;
}

export const MeetingForm = ({ onSuccess, onCancel, initialValues 
}: MeetingFormProps) => {
  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [agentSearch, setAgentSearch] = useState("");
  const agents= useQuery(
    trpc.agents.getMany.queryOptions({
      pageSize: 100,
      search: "",
    }),




  );
  const createMeeting = useMutation(
    trpc.meetings.create.mutationOptions({
      onSuccess: async (data) => {
        await queryClient.invalidateQueries( 
          trpc.meetings.getMany.queryOptions({}) );
        
        onSuccess?.(data.id);
      },
      onError: (error) => {
        toast.error(error.message || "Something went wrong");
      },
    })
  );
  const updateMeeting = useMutation(
    trpc.meetings.update.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries( trpc.meetings.getMany.queryOptions({}) );
        if(initialValues?.id){
         await queryClient.invalidateQueries( trpc.agents.getOne.queryOptions({id: initialValues.id}) );
        }
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message || "Something went wrong");
      },
    })
  );

  const form = useForm<z.infer<typeof meetingsInsertSchema>>({
    resolver: zodResolver(meetingsInsertSchema),
    defaultValues: {
      name: initialValues?.name ?? "",
      agentId: initialValues?.agentId ?? "",
    },
  });

  const isEdit = !!initialValues?.id;
  const isPending = createMeeting.isPending || updateMeeting.isPending;

  const onSubmit = (values: z.infer<typeof meetingsInsertSchema>) => {
    if (isEdit) {
      updateMeeting.mutate({...values, id: initialValues?.id });
    } else {
      createMeeting.mutate(values);
    }
  };
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter agent name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        
        
        <div className="flex justify-between gap-x-2">
          {onCancel && (
            <Button
              variant="ghost"
              onClick={onCancel}
              type="button"
              disabled={isPending}
            >
              Cancel
            </Button>
          )}
        </div>
        <Button type="submit" disabled={isPending}>
          {isEdit ? "Update Agent" : "Create Agent"}
        </Button>

      </form>
    </Form>
  );
};
