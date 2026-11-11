import { Classification, Medication } from '../types/pharmacy';
import masterDb from './masterDatabase.json';

export const INITIAL_CLASSIFICATIONS: Classification[] = masterDb.classifications as Classification[];
export const INITIAL_MEDICATIONS: Medication[] = masterDb.medications as Medication[];
