/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChatAppService } from './chat-app.service';

describe('Service: ChatApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatAppService]
    });
  });

  it('should ...', inject([ChatAppService], (service: ChatAppService) => {
    expect(service).toBeTruthy();
  }));
});
