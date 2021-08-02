import { Box, BoxProps } from "@material-ui/core";
import { ReactElement } from "react";

export default function Container(props: BoxProps): ReactElement {
  return <Box mx="54px" overflow="hidden" {...props}></Box>;
}
