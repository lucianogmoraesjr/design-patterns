type PageOrientation = 'portrait' | 'landscape';
type Unit = 'mm' | 'cm';

export class PDFGenerator {
  private pageOrientation: PageOrientation = 'portrait';
  private unit: Unit = 'mm';
  private pageWidth: number = 210;
  private pageHeight: number = 297;
  private withFooter: boolean = false;
  private footerHeight: number = 0;

  public setPageOrientation(pageOrientation: PageOrientation) {
    this.pageOrientation = pageOrientation;
  }

  public getPageOrientation() {
    return this.pageOrientation;
  }

  public setUnit(unit: Unit) {
    this.unit = unit;
  }

  public getUnit() {
    return this.unit;
  }

  public setPageWidth(pageWidth: number) {
    this.pageWidth = pageWidth;
  }

  public getPageWidth() {
    return this.pageWidth;
  }

  public setPageHeight(pageHeight: number) {
    this.pageHeight = pageHeight;
  }

  public getPageHeight() {
    return this.pageHeight;
  }

  public setWithFooter(withFooter: boolean) {
    this.withFooter = withFooter;
  }

  public getWithFooter() {
    return this.withFooter;
  }

  public setFooterHeight(footerHeight: number) {
    this.footerHeight = footerHeight;
  }

  public getFooterHeight() {
    return this.footerHeight;
  }
}
