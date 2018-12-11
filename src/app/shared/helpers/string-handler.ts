/* Utility string handling functions */

export const BYTE_SIZE = 1024;

// Capitalize fist letter
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Lowercase fist letter
export function lowercaseFirstLetter(string: string): string {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function convertToNAIfNullOrEmpty(str: string): string {
  return (str === null || str === '') ? 'N/A' : str;
}

export function convertSizeToString(filesize: number): string {
  return filesize > 0 ? Math.floor(filesize / BYTE_SIZE).toString() : '0';
}
