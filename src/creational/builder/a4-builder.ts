import { PDFGenerator } from './pdf-generator.js';
import type { PDFGeneratorBuilder } from './pdf-generator-builder.js';

export class A4Builder implements PDFGeneratorBuilder {
  private pdfGenerator: PDFGenerator;

  constructor() {
    this.pdfGenerator = new PDFGenerator();
  }

  public setPageConfiguration(): void {
    this.pdfGenerator.setPageOrientation('portrait');
    this.pdfGenerator.setUnit('mm');
    this.pdfGenerator.setPageWidth(210);
    this.pdfGenerator.setPageHeight(297);
  }

  public setFooter(): void {
    this.pdfGenerator.setWithFooter(true);
    this.pdfGenerator.setFooterHeight(15);
  }

  public getPDFGenerator(): PDFGenerator {
    return this.pdfGenerator;
  }
}
