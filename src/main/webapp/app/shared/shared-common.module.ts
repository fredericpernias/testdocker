import { NgModule } from '@angular/core';

import { DockerTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [DockerTestSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [DockerTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DockerTestSharedCommonModule {}
