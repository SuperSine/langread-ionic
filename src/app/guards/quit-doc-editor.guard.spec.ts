import { TestBed, async, inject } from '@angular/core/testing';

import { QuitDocEditorGuard } from './quit-doc-editor.guard';

describe('QuitDocEditorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuitDocEditorGuard]
    });
  });

  it('should ...', inject([QuitDocEditorGuard], (guard: QuitDocEditorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
