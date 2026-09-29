import { A3Builder } from './a3-builder.js';
import { A4Builder } from './a4-builder.js';
import { PDFGeneratorDirector } from './pdf-generator-director.js';

describe('Builder Pattern', () => {
  it('should create a A4 PDF', () => {
    const builder = new A4Builder();
    const director = new PDFGeneratorDirector(builder);
    director.createPDFGenerator();
    const pdf = builder.getPDFGenerator();

    expect(pdf.getPageWidth()).toBe(210);
    expect(pdf.getPageHeight()).toBe(297);
    expect(pdf.getWithFooter()).toBeTruthy();
  });

  it('should create a A3 PDF', () => {
    const builder = new A3Builder();
    const director = new PDFGeneratorDirector(builder);
    director.createPDFGenerator();
    const pdf = builder.getPDFGenerator();

    expect(pdf.getPageWidth()).toBe(297);
    expect(pdf.getPageHeight()).toBe(420);
    expect(pdf.getWithFooter()).toBeTruthy();
  });

  it('should create a A4 PDF without footer', () => {
    const builder = new A4Builder();
    const director = new PDFGeneratorDirector(builder);
    director.createPDFGeneratorWithoutFooter();
    const pdf = builder.getPDFGenerator();

    expect(pdf.getPageWidth()).toBe(210);
    expect(pdf.getPageHeight()).toBe(297);
    expect(pdf.getWithFooter()).toBeFalsy();
  });

  it('should create a A3 PDF without footer', () => {
    const builder = new A3Builder();
    const director = new PDFGeneratorDirector(builder);
    director.createPDFGeneratorWithoutFooter();
    const pdf = builder.getPDFGenerator();

    expect(pdf.getPageWidth()).toBe(297);
    expect(pdf.getPageHeight()).toBe(420);
    expect(pdf.getWithFooter()).toBeFalsy();
  });
});
