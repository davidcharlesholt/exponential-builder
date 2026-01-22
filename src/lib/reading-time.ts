/**
 * Calculates estimated reading time based on word count
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 225 wpm)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 225): number {
  // Remove HTML tags if any
  const plainText = text.replace(/<[^>]*>/g, ' ');
  
  // Split by whitespace and filter out empty strings
  const words = plainText.trim().split(/\s+/).filter(word => word.length > 0);
  
  const minutes = words.length / wordsPerMinute;
  
  // Round up to nearest minute, minimum 1 minute
  return Math.max(1, Math.ceil(minutes));
}

/**
 * Extracts plain text from React component content
 * Useful for calculating reading time from JSX
 */
export function extractTextFromJSX(content: string): string {
  // Remove JSX tags but keep the text content
  return content
    .replace(/<[^>]*>/g, ' ')
    .replace(/&apos;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
