import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const Menubar = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      className={cn(
        "flex h-9 items-center space-x-1 rounded-md border border-border bg-background p-1 shadow-sm",
        className
      )}
      {...props}
    />
  );
});
Menubar.displayName = "Menubar";

const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      )}
      {...props}
    />
  );
});
MenubarTrigger.displayName = "MenubarTrigger";

const MenubarSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) => {
    return (
      <MenubarPrimitive.SubTrigger
        ref={ref}
        className={cn(
          "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground",
          inset && "pl-8",
          className
        )}
        {...props}
      >
        {children}
        <ChevronRight className="ml-auto h-4 w-4" />
      </MenubarPrimitive.SubTrigger>
    );
  }
);
MenubarSubTrigger.displayName = "MenubarSubTrigger";

const MenubarSubContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <MenubarPrimitive.SubContent
        ref={ref}
        className={cn(
          "z-50 min-w-[8rem] rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg",
          className
        )}
        {...props}
      />
    );
  }
);
MenubarSubContent.displayName = "MenubarSubContent";

const MenubarContent = React.forwardRef(
  ({ className, align = "start", sideOffset = 6, ...props }, ref) => {
    return (
      <MenubarPrimitive.Portal>
        <MenubarPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            "z-50 min-w-[12rem] rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md",
            className
          )}
          {...props}
        />
      </MenubarPrimitive.Portal>
    );
  }
);
MenubarContent.displayName = "MenubarContent";

const MenubarItem = React.forwardRef(
  ({ className, inset, ...props }, ref) => {
    return (
      <MenubarPrimitive.Item
        ref={ref}
        className={cn(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:opacity-50",
          inset && "pl-8",
          className
        )}
        {...props}
      />
    );
  }
);
MenubarItem.displayName = "MenubarItem";

const MenubarCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) => {
    return (
      <MenubarPrimitive.CheckboxItem
        ref={ref}
        checked={checked}
        className={cn(
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <MenubarPrimitive.ItemIndicator>
            <Check className="h-4 w-4" />
          </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
      </MenubarPrimitive.CheckboxItem>
    );
  }
);
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

const MenubarRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <MenubarPrimitive.RadioItem
        ref={ref}
        className={cn(
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <MenubarPrimitive.ItemIndicator>
            <Circle className="h-4 w-4 fill-current" />
          </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
      </MenubarPrimitive.RadioItem>
    );
  }
);
MenubarRadioItem.displayName = "MenubarRadioItem";

const MenubarLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) => {
    return (
      <MenubarPrimitive.Label
        ref={ref}
        className={cn(
          "px-2 py-1.5 text-sm font-semibold",
          inset && "pl-8",
          className
        )}
        {...props}
      />
    );
  }
);
MenubarLabel.displayName = "MenubarLabel";

const MenubarSeparator = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <MenubarPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-border", className)}
        {...props}
      />
    );
  }
);
MenubarSeparator.displayName = "MenubarSeparator";

const MenubarShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayName = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};