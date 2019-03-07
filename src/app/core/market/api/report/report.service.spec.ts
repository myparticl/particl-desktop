import { TestBed, inject } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material';

import { MarketModule } from '../../market.module';
import { CoreUiModule } from '../../../../core-ui/core-ui.module';

import { ReportService } from './report.service';
import { CoreModule } from 'app/core/core.module';


describe('ReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule.forTest(),
        CoreUiModule,
        MarketModule.forRoot()
      ],
      providers: [ ReportService ]
    });
  });

  it('should be created', inject([ReportService], (service: ReportService) => {
    expect(service).toBeTruthy();
  }));
});
