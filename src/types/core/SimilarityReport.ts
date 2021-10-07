import { WordsDTO } from '../words';
import { IntelligibilityDTO } from '../intellgibility';
import { Intermediate, Replacement } from '@interslavic/odometer';

export type FlavorizationMatch = {
  distance: {
    percent: number;
    absolute: number;
  };
  interslavic: IntelligibilityIntermediate;
  national: IntelligibilityIntermediate;
};

export type SimilarityReport = {
  id: string;
  average: FlavorizationMatch;
  closest: FlavorizationMatch;
  farthest: FlavorizationMatch;
};

export type SimilarityParams = {
  words: WordsDTO;
  intelligibility: IntelligibilityDTO;
};

export class IntelligibilityIntermediate extends Intermediate<
  SimilarityParams,
  Replacement<SimilarityParams>
> {}