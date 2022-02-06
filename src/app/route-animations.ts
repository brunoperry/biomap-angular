import {
  trigger,
  transition,
  style,
  group,
  query,
  animate,
} from '@angular/animations';
import { Util } from './utils';

export const swap = trigger('routeAnimations', [transition('* <=> *', fade())]);

function fade(): any {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [style({ position: 'absolute', inset: 0 })],
      optional
    ),
    query(':enter', [style({ opacity: 0 })], optional),
    group([
      query(
        ':enter',
        [animate(`${Util.SPEED}ms ${Util.SPEED}ms`, style({ opacity: 1 }))],
        optional
      ),
      query(':leave', [animate(Util.SPEED, style({ opacity: 0 }))], optional),
    ]),
  ];
}
