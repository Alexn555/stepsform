
export function convertFromTimestampToDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('en-GB');
}
