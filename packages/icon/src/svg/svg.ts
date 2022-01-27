import { a11yElderly } from './a11y-elderly';
import { a11yPregnant } from './a11y-pregnant';
import { a11yWheelchair } from './a11y-wheelchair';
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
import { basket } from './basket';
import { block } from './block';
import { bluetooth } from './bluetooth';
import { book } from './book';
import { calculator } from './calculator';
import { calendar } from './calendar';
import { calendarOk } from './calendar-ok';
import { calendarSettings } from './calendar-settings';
import { camera } from './camera';
import { cart } from './cart';
import { change } from './change';
import { chartArea } from './chart-area';
import { chartColumns } from './chart-columns';
import { chartDown } from './chart-down';
import { chartUp } from './chart-up';
import { chat } from './chat';
import { clearContent } from './clear-content';
import { clipboard } from './clipboard';
import { clock } from './clock';
import { close } from './close';
import { company } from './company';
import { construction } from './construction';
import { copy } from './copy';
import { cotton } from './cotton';

export class Svg {
  static a11yElderly = a11yElderly;
  static a11yPregnant = a11yPregnant;
  static a11yWheelchair = a11yWheelchair;
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
  static basket = basket;
  static block = block;
  static bluetooth = bluetooth;
  static book = book;
  static calculator = calculator;
  static calendar = calendar;
  static calendarOk = calendarOk;
  static calendarSettings = calendarSettings;
  static camera = camera;
  static cart = cart;
  static change = change;
  static chartArea = chartArea;
  static chartColumns = chartColumns;
  static chartDown = chartDown;
  static chartUp = chartUp;
  static chat = chat;
  static clearContent = clearContent;
  static clipboard = clipboard;
  static clock = clock;
  static close = close;
  static company = company;
  static construction = construction;
  static copy = copy;
  static cotton = cotton;

  static getIcon(name: string) {
    const file = name.replace(/-([a-z])/g, g => g[1].toUpperCase());

    return this[file];
  }
}
