/** For situations when moment.js would be overkill */

export function isDateInRange(checkPointIn: Date, startPointIn: Date, endPointIn: Date): boolean | null {
  if ([checkPointIn, startPointIn, endPointIn].some(point => point === undefined)) {
    console.warn('Function expects three parameters; checkPoint: Date, startPoint: Date, endPoint: Date');
    return null;
  }
  const checkPoint = new Date(checkPointIn).getTime();
  const startPoint = new Date(startPointIn).getTime();
  const endPoint = new Date(endPointIn).getTime();

  return checkPoint > startPoint && checkPoint < endPoint;
}

export function isDateBeforeDate(firstDateIn: Date, secondDateIn: Date): boolean | null {
  if ([firstDateIn, secondDateIn].some(point => point === undefined)) {
    console.warn('Function expects two parameters; firstDate: Date, secondDate: Date');
    return null;
  }
  const firstDate: number = new Date(firstDateIn).getTime();
  const secondDate: number = new Date(secondDateIn).getTime();

  return firstDate < secondDate;
}

/** REVIEW: Delete? I can't for the life of me remember what I needed this for at one point. */
export function getDatesFromStartAndStep(startPointIn: Date, stepSizeInMinsIn: number): Date[] | null {
  if ([startPointIn, stepSizeInMinsIn].some(point => point === undefined)) {
    console.warn('Function expects two parameters; startPoint: Date, stepSizeInMins: number');
    return null;
  }
  const startPoint: Date = new Date(startPointIn);
  const endPoint: Date = new Date(startPoint.getTime() + stepSizeInMinsIn * 60 * 1000);

  return [startPoint, endPoint];
}
