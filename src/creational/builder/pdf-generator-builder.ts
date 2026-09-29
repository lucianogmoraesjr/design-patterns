import type { PDFGenerator } from './pdf-generator.js';

export interface PDFGeneratorBuilder {
  getPDFGenerator(): PDFGenerator;
  setPageConfiguration(): void;
  setFooter(): void;
}
