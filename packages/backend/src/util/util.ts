export function validate(reqBody: Record<string, string>): boolean {
  return !!reqBody?.name && !!reqBody?.email && !!reqBody?.message;
}
