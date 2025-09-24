// 代码生成时间: 2025-09-24 15:45:25
// Import the necessary dependencies
const DOMPurify from 'dompurify';

// Function to sanitize user input
function sanitizeInput(input) {
  // Check if input is undefined or null
  if (!input) {
    throw new Error('Input cannot be undefined or null');
  }

  // Sanitize the input using DOMPurify
  return DOMPurify.sanitize(input);
}

// Export the sanitizeInput function
export default sanitizeInput;

// Usage:
// const userContent = '<script>alert(1)</script>';
// const safeContent = sanitizeInput(userContent);
// console.log(safeContent); // Output will be an empty string without the script tag