import { a11yElderly } from './a11y-elderly';
import { a11yPregnant } from './a11y-pregnant';
import { agrobusiness } from './agrobusiness';
import { alignCenter } from './align-center';
import { alignJustify } from './align-justify';
import { alignLeft } from './align-left';
import { alignRight } from './align-right';
import { anchor } from './anchor';
import { archive } from './archive';
import { arrowDown } from './arrow-down';
import { arrowLeft } from './arrow-left';
import { arrowRight } from './arrow-right';
import { arrowUp } from './arrow-up';
import { attach } from './attach';
import { automaticBarrier } from './automatic-barrier';
import { balance } from './balance';
import { balanceWeight } from './balance-weight';
import { barCode } from './bar-code';

export class Svg {
  static a11yPregnant = a11yPregnant;
  static a11yElderly = a11yElderly;
  static agrobusiness = agrobusiness;
  static alignCenter = alignCenter;
  static alignJustify = alignJustify;
  static alignLeft = alignLeft;
  static alignRight = alignRight;
  static anchor = anchor;
  static archive = archive;
  static arrowDown = arrowDown;
  static arrowLeft = arrowLeft;
  static arrowRight = arrowRight;
  static arrowUp = arrowUp;
  static attach = attach;
  static automaticBarrier = automaticBarrier;
  static balance = balance;
  static balanceWeight = balanceWeight;
  static barCode = barCode;

  static getIcon(name: string) {
    const file = name.replace(/-([a-z])/g, g => g[1].toUpperCase());

    return this[file];
  }
}
