import type { Gateway } from './gateway.js';
import { PagFacil } from './third-parties/pag-facil.js';

export class PagFacilAdapter extends PagFacil implements Gateway {}
