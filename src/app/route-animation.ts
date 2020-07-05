import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        // transition('* <=> *', [
        //     // Set a default  style for enter and leave
        //     query(':enter, :leave', [
        //         style({
        //             background: '#1B1A3D !important' ,
        //             position: 'absolute',
        //             left: 0,
        //             width: '100%',
        //             opacity: 0,
        //             transform: 'scale(0) translateY(100%)',
        //         }),
        //     ]),
        //     // Animate the new page in
        //     query(':enter', [
        //         animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        //     ])
        // ]),
    ]);

export const routeTransitionAnimations = trigger('tabsAnimation', [
    transition('One => Two, One => Three, One => Four, Two => Three, Two => Four, Three => Four', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
            })
        ]),
        query(':enter', [style({ right: '-100%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('1s ease-out', style({ right: '0%', opacity: 0 }))]),
            query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
        ]),
        query(':enter', animateChild())
    ]),
    transition('Four => Three, Four => Two, Four => One, Three => Two, Three => One, Two => One', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({ left: '0%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('1s ease-out', style({ left: '5%', opacity: 0 }))]),
            query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
        ]),
        query(':enter', animateChild())
    ])
]);