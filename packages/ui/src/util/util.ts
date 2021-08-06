import { scroller } from "react-scroll";

export function scrollTo(id: string): void {
  scroller.scrollTo(id, {
    smooth: "easeInOutQuint",
    duration: 500,
  });
}

export function setOpacity(hex: string, alpha: number): string {
  return `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;
}
