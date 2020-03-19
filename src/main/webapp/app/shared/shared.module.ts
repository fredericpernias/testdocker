import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DockerTestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DockerTestSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DockerTestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DockerTestSharedModule {
  static forRoot() {
    return {
      ngModule: DockerTestSharedModule
    };
  }
}
