import { Box, BoxProps } from "@material-ui/core";
import { ReactElement } from "react";
import { setOpacity } from "../../util/util";

interface CircleProps extends BoxProps {
  diameter: string;
  transparency?: number;
}

export default function Circle({
  diameter,
  transparency,
  ...props
}: CircleProps): ReactElement {
  return (
    <Box
      display="flex"
      position="absolute"
      width={diameter}
      height={diameter}
      bgcolor={setOpacity("#e0e0e0", transparency || 1)}
      borderRadius="50%"
      zIndex={-1}
      {...props}
    ></Box>
  );
}
