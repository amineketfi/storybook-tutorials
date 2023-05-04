import {
  moduleMetadata,
  Meta,
  StoryFn,
  applicationConfig,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Store, NgxsModule } from '@ngxs/store';
import { importProvidersFrom } from '@angular/core';
import { fireEvent, within } from '@storybook/testing-library';

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
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(
          NgxsModule.forRoot([TasksState], {
            developmentMode: !environment.production,
          })
        ),
        importProvidersFrom(Store),
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

export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Simulates pinning the first taskk
  await fireEvent.click(canvas.getByLabelText('pinTask-1'));
  // Simulates pinning the third task
  await fireEvent.click(canvas.getByLabelText('pinTask-3'));
};
