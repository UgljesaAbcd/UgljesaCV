import { template, templateSettings } from 'lodash';

// templateVariables - is object that contains key value pair that will replace :key name in template (as variable)
const insertTemplateVariables = (providedTemplate, templateVariables) => {
  if (!templateVariables) {
    return providedTemplate;
  }
  templateSettings.interpolate = /:([A-z]*)/g;
  // replacing the ':id' with id value
  return template(providedTemplate)(templateVariables);
};

const filterEmptyStrings = filterObject => {
  if (!filterObject) return;
  let checkedObj = { ...filterObject };
  // eslint-disable-next-line array-callback-return
  Object.keys(checkedObj).map(column => {
    if (
      checkedObj[column] === undefined ||
      checkedObj[column] === null ||
      checkedObj[column] === ''
    )
      delete checkedObj[column];
  });
  return checkedObj;
};

const copyObjectWithoutRef = providedObj =>
  JSON.parse(JSON.stringify(providedObj));

const isObject = a => a != null && a.constructor === Object;
const isArray = a => Array.isArray(a);
const isNumber = a => !isNaN(a);
const isString = a => typeof a === 'string';
const isBool = a => typeof a === 'boolean';
const isInteger = n => Number(n) === n && n % 1 === 0;
const isFloat = n => Number(n) === n && n % 1 !== 0;
const isDate = date => {
  if (date === null) return false;
  return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
};

const parseValues = (num1, num2) => {
  let a = parseFloat(num1);
  let b = parseFloat(num2);
  return { a, b };
};

const isValidNumber = num => {
  return num !== null && !isNaN(num);
};

let numOr0 = n => {
  let parsedNum = parseFloat(n);
  return n === null || isNaN(parsedNum) ? 0 : parsedNum;
};

const sum = (...arrOfNumbers) => {
  return [...arrOfNumbers].reduce((a, b) => numOr0(a) + numOr0(b));
};

const multiple = (num1, num2) => {
  let { a, b } = parseValues(num1, num2);
  if (isNaN(a) || isNaN(b)) return 0;
  return a * b;
};

const division = (num1, num2) => {
  let { a, b } = parseValues(num1, num2);
  if (isValidNumber(a) && isValidNumber(b) && b !== 0) return a / b;
  return 0;
};

const subtraction = (num1, num2) => {
  let { a, b } = parseValues(num1, num2);
  if (isNaN(a) || isNaN(b)) return 0;
  return a - b;
};

const convertToNumber = (value, altValue) => {
  let myNum = parseFloat(value);
  if (!isNaN(myNum)) {
    return myNum;
  }
  if (altValue) {
    return altValue;
  } else {
    return 0;
  }
};

const convertFileToBase64 = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = error => {
      reject(error);
    };
  });
};

export {
  filterEmptyStrings,
  isObject,
  isArray,
  isNumber,
  isString,
  isBool,
  isInteger,
  isFloat,
  isDate,
  copyObjectWithoutRef,
  parseValues,
  isValidNumber,
  numOr0,
  sum,
  multiple,
  division,
  subtraction,
  convertToNumber,
  convertFileToBase64,
  insertTemplateVariables
};
