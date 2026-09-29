import { PDFGenerator } from './pdf-generator.js';
import type { PDFGeneratorBuilder } from './pdf-generator-builder.js';

export class A3Builder implements PDFGeneratorBuilder {
  private pdfGenerator: PDFGenerator;

  constructor() {
    this.pdfGenerator = new PDFGenerator();
  }

  public setPageConfiguration(): void {
    this.pdfGenerator.setPageOrientation('portrait');
    this.pdfGenerator.setUnit('mm');
    this.pdfGenerator.setPageWidth(297);
    this.pdfGenerator.setPageHeight(420);
  }

  public setFooter(): void {
    this.pdfGenerator.setWithFooter(true);
    this.pdfGenerator.setFooterHeight(20);
  }

  public getPDFGenerator(): PDFGenerator {
    return this.pdfGenerator;
  }
}
