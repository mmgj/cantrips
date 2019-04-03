export function getType(input: any, restricted = false): string {
  const baseType: string = typeof (input);
  if (restricted) return baseType;
  let output: string = baseType;
  if (baseType.toLowerCase() === 'object') output = input.type ? input.type.name : input.constructor.name;
  return output;
}

export function getShape(obj: object, depth: number = 1): string {
  const tab: string = '  ';
  const prefix: string = tab;
  let output = '{\n';
  Object.entries(obj).forEach((couple: any[]) => {
    const type: string = typeof couple[1];
    let desc = '';
    if (type === 'function') {
      desc = 'func';
    } else if (type === 'boolean') {
      desc = 'bool';
    } else if (type === 'object') {
      desc = Array.isArray(couple[1]) ? 'array' : `object: ${getShape(couple[1], depth + 1).substring(2)}`;
    } else {
      desc = type;
    }
    output += `${tab.repeat(depth + 1)}${couple[0]}: PropTypes.${desc},\n`;
  });
  output += `${tab.repeat(depth > 0 ? depth : 0)}}`;
  return prefix + output;
}
