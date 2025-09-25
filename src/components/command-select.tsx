import {ReactNode , useState} from 'react'
import {ChevronsUpDownIcon} from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import {
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
    CommandResponsiveDialog,
  } from "./ui/command"
  interface Props {
    options: Array <{
        id : string;
        value : string;
        children : ReactNode;
    }>;
    onSelect : (value : string) => void;
    onSearch? : (value : string) => void;
    value : string;
    placeholder? : string;
    isSearchable? : boolean;
    className? : string;
  }
export const CommandSelect = ({
    options,
    onSelect,
    onSearch,
    value,
    placeholder = "Select an option", 
    className,
}: Props)=>{
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);
  return (
      <>
      <Button>
<div>
{}

</div>
      </Button>
      </>
  )
}
