import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = React.forwardRef((props, ref) => {
  return <AspectRatioPrimitive.Root ref={ref} {...props} />;
});

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };