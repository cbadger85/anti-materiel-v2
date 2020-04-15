import './colors.css';

export default {
  black: getComputedStyle(document.body).getPropertyValue('--black'),
  blue00: getComputedStyle(document.body).getPropertyPriority('--blue-0-0'),
  blue0: getComputedStyle(document.body).getPropertyValue('--blue-0'),
  blue1: getComputedStyle(document.body).getPropertyValue('--blue-1'),
  blue2: getComputedStyle(document.body).getPropertyValue('--blue-2'),
  white: getComputedStyle(document.body).getPropertyValue('--white'),
  gray2: getComputedStyle(document.body).getPropertyValue('--gray-2'),
  gray3: getComputedStyle(document.body).getPropertyValue('--gray-3'),
  warmGray2: getComputedStyle(document.body).getPropertyValue('--warm-gray-2'),
  orange4: getComputedStyle(document.body).getPropertyValue('--orange-4'),
  yellow7: getComputedStyle(document.body).getPropertyValue('--yellow-7'),
  teal5: getComputedStyle(document.body).getPropertyValue('--teal-5'),
  teal7: getComputedStyle(document.body).getPropertyValue('--teal-7'),
  cyan8: getComputedStyle(document.body).getPropertyValue('--cyan-8'),
  lightBlue: getComputedStyle(document.body).getPropertyValue('--light-blue'),
  skyBlue: getComputedStyle(document.body).getPropertyValue('--sky-blue'),
};
