import { Component, Input } from '@angular/core';

@Component({
  selector: 'sb-pure-inbox-screen',
  templateUrl: './pure-inbox-screen.component.html',
  styleUrls: ['./pure-inbox-screen.component.scss'],
})
export class PureInboxScreenComponent {
  @Input() error: any;
}
