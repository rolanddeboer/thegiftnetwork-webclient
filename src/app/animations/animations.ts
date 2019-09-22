import {
  trigger,
  style,
  animate,
  transition,
  query
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({ 
            opacity: '0'
          }),
          animate('0.5s ease-in-out', style({ opacity: '1' }))
        ], 
        { optional: true }
      ),
    ])
  ]);