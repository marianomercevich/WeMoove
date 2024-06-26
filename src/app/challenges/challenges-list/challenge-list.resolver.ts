import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { ChallengeModel } from '../../models/challenge.model';
import { ChallengeService } from '../../services/challenge.service';

@Injectable()
export class ChallengeListResolver implements Resolve<DataStore<Array<ChallengeModel>>> {

  constructor(private challengeService: ChallengeService) { }

  async resolve(): Promise<DataStore<Array<ChallengeModel>>> {
    const dataSource: Observable<Array<ChallengeModel>> = this.challengeService.getChallengeListDataSource('available');
    const dataStore: DataStore<Array<ChallengeModel>> = this.challengeService.getChallengeListStore(dataSource);

    return dataStore;
  }
}