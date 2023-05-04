import {
  moduleMetadata,
  Meta,
  StoryFn,
  applicationConfig,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Store, NgxsModule } from '@ngxs/store';
import { importProvidersFrom } from '@angular/core';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskModule } from '../task.module';
import { TasksState } from '../../state/task.state';
import { environment } from 'src/environments/environment';

export default {
  component: PureInboxScreenComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TaskModule,
        NgxsModule.forRoot([TasksState], {
          developmentMode: !environment.production,
        }),
      ],
      providers: [Store],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(
          NgxsModule.forRoot([TasksState], {
            developmentMode: !environment.production,
          })
        ),
      ],
    }),
  ],
  title: 'PureInboxScreen',
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};
