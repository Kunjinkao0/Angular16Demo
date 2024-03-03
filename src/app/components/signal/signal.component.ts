import { Component, EffectRef, Injector, OnInit, effect, runInInjectionContext, signal, } from '@angular/core';

@Component({
  selector: 'comp-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export class SignalComponent implements OnInit {
  signalCount1 = signal(10);
  signalCount2 = signal(20);
  legacyCount = 3;

  effects: EffectRef[] = [];

  constructor(private injector: Injector) {
    const e1 = effect(() => {
      console.log('constructor - effect - count1', this.signalCount1());
    });
    const e2 = effect(() => {
      console.log('constructor - effect - count2', this.signalCount2());
    });
    this.effects.push(e1, e2);
  }

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      const e = effect(() => {
        console.log('runInInjectionContext - effect - count1', this.signalCount1());
        console.log('runInInjectionContext - effect - count2', this.signalCount2());
      });

      this.effects.push(e);
    });
    console.log('ngOnInit', this.signalCount1());
  }

  addSignal1() {
    this.signalCount1.set(this.signalCount1() + 1);
  }

  addSignal2() {
    this.signalCount2.set(this.signalCount2() + 1);
  }

  addLegacy() {
    this.legacyCount += 1;
  }

  unsubscribe() {
    this.effects.forEach(e => e.destroy());
  }
}
