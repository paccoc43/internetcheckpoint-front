import { AfterViewInit, Component } from '@angular/core';
import { animate,  stagger, } from 'animejs';

@Component({
  selector: 'app-fondo-animado',
  standalone: true,
  imports: [],
  templateUrl: './fondo-animado.component.html',
  styleUrl: './fondo-animado.component.scss'
})
export class FondoAnimadoComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const fondo = document.querySelector('.fondo-animado');
    if (fondo) {
      animate('.fondo-animado', {
          x: 320,
          rotate: { from: -180 },
          duration: 1250,
          // delay: stagger(65, { from: 'center' }),
          ease: 'inOutQuint',
          loop: true,
          alternate: true
      });
    }

    animate('svg #ship',{
    translateX: [-200, 350], // from 100 to 250
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 8000
    });

    animate('svg #baloon',{
    translateX: [-200, 350], // from 100 to 250
      direction: 'alternate',
      keyframes: [
        {translateY: -50},
        {translateX: 800},
        {translateY: 10},
        {translateX: 10},
        {translateY: 100}
      ],
      loop: true,
      easing: 'easeInOutSine',
      duration: 15000
    });

    var design = animate('svg #wing', {
      skew: 10, 
      easing: 'linear',
      loop: true,
      direction: 'alternate',
    });


    animate('svg #fan1', {
      rotate: ([360]),
      loop: true,
      easing: 'linear',
      duration: 5000,
    });

    animate('svg #fan2', {
      rotate: ([360]),
      loop: true,
      easing: 'linear',
      duration: 5000,
    });

    animate('svg #fan3', {
      rotate: ([360]),
      loop: true,
      easing: 'linear',
      duration: 5000,
    });

    animate('#Group_42 path',{
      targets: '#Group_42 path',
      translateX: [20, -50], // from 100 to 250
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: function(el, i, l) {
        return i * 400;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 50;
      }
    });
  }
}
