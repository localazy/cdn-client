import type { Context } from '@/cdn/context/context.js';

export abstract class CdnBase {
  protected context: Context;

  constructor(context: Context) {
    this.context = context;
  }
}
