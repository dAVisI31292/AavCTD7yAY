// 代码生成时间: 2025-10-14 03:03:18
// compression_tool_nuxt.js
// A data compression and decompression tool using JS and Nuxt framework.

const zlib = require('zlib');
const fs = require('fs').promises;

class CompressionTool {
  // Compress a given file
  static async compressFile(filePath) {
    try {
      // Read the file content
      const fileContent = await fs.readFile(filePath, 'utf8');

      // Compress the content using gzip
      const compressedContent = await zlib.gzipSync(fileContent);

      // Write the compressed content to a new file
      await fs.writeFile(`${filePath}.gz`, compressedContent);

      console.log(`File compressed and saved as ${filePath}.gz`);
    } catch (error) {
      console.error(`Error compressing file: ${error.message}`);
    }
  }

  // Decompress a given compressed file
  static async decompressFile(filePath) {
    try {
      // Read the compressed file content
      const compressedContent = await fs.readFile(filePath, 'utf8');

      // Decompress the content using gzip
      const decompressedContent = await zlib.unzipSync(compressedContent);

      // Write the decompressed content to a new file
      await fs.writeFile(`${filePath}.decompressed`, decompressedContent.toString('utf8'));

      console.log(`File decompressed and saved as ${filePath}.decompressed`);
    } catch (error) {
      console.error(`Error decompressing file: ${error.message}`);
    }
  }
}

// Example usage:
// To compress a file, call CompressionTool.compressFile('path/to/file.txt');
// To decompress a file, call CompressionTool.decompressFile('path/to/file.txt.gz');
