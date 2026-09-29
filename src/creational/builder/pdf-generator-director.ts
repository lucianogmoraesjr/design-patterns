import type { PDFGeneratorBuilder } from './pdf-generator-builder.js';

export class PDFGeneratorDirector {
  constructor(private readonly builder: PDFGeneratorBuilder) {}

  public createPDFGenerator(): void {
    this.builder.setPageConfiguration();
    this.builder.setFooter();
  }

  public createPDFGeneratorWithoutFooter(): void {
    this.builder.setPageConfiguration();
  }
}
