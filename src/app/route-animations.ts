import {
  trigger,
  transition,
  style,
  group,
  query,
  animate,
} from '@angular/animations';

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
      query(':enter', [animate('500ms', style({ opacity: 1 }))], optional),
      query(':leave', [animate('500ms', style({ opacity: 0 }))], optional),
    ]),
  ];
}
