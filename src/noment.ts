/** For situations when moment.js would be overkill */

export function isDateInRange(checkPointIn: Date, startPointIn: Date, endPointIn: Date): boolean {
  if ([checkPointIn, startPointIn, endPointIn].some(point => point === undefined)) {
    console.warn('Function expects three parameters; checkPoint: Date, startPoint: Date, endPoint: Date');
    return false;
  }
  const checkPoint = new Date(checkPointIn).getTime();
  const startPoint = new Date(startPointIn).getTime();
  const endPoint = new Date(endPointIn).getTime();

  return checkPoint > startPoint && checkPoint < endPoint;
}

export function isDateBeforeDate(firstDateIn: Date, secondDateIn: Date): boolean {
  if ([firstDateIn, secondDateIn].some((point) => point === undefined)) {
    console.warn('Function expects two parameters; firstDate: Date, secondDate: Date');
    return false;
  }
  const firstDate = new Date(firstDateIn).getTime();
  const secondDate = new Date(secondDateIn).getTime();

  return firstDate < secondDate;
}

export function getDatesFromStartAndStep(startPointIn: Date, stepSizeInMinsIn: number): Array<Date> | null {
  if ([startPointIn, stepSizeInMinsIn].some(point => point === undefined)) {
    console.warn('Function expects two parameters; startPoint: Date, stepSizeInMins: number');
    return null;
  }
  const startPoint: Date = new Date(startPointIn);
  const endPoint: Date = new Date(startPoint.getTime() + (stepSizeInMinsIn * 60 * 1000));

  return [startPoint, endPoint];
}
