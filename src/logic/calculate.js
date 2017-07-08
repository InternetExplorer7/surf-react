import operate from './operate';
import isNumber from './isNumber';

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {

  // Step 1: if AC -> reset 
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null
    }
  }
  // Step 2:
  // If button is number 
  // if the button is equal to zero and the next number to be operated on is equal to zero,
  // then return an empty object.
  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {}
    }

    // If there is an operation, update next.
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName}
      }
      return { next: buttonName }
    }

    // if there is no operation, update next and clear the value.
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null
      }
    }

    return {
      next: buttonName,
      total: null
    };
  }

  // STEP 3: 
  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {}
      }
      return { next: obj.next + '.'};
    }

    if (obj.operation) {
      return { next: '0.'}
    }

    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: obj.total + '.'};
    }
    return { total: '0.' };
  }

  // If there exists a next number but no operation, then return an object with a null total (reset) and update  our new next with prev next + button name.

  // Lastly, if the buttonName is a number but there exists no previous operation or next, then return our next to be our button name and reset the total.
  // Otherwise, return "0." for the total.

  // Step 4: If the button name is "=", and if next and operation exist, then return a calculated value for the total and nullify everything else (next & operation.)
  //  Otherwise, return an empty object if there for some reason exists no next and operation values.
  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null
      };
    } else { // don't need else here, but helps w/ readibility.
      return {};
    }
  }

  // Step 5: If the button name is "+/-", and if there exist a next operation, simply negate the current value of next. (hint: make sure to retain accuracy!)

  // Step 6: the user entered an operation (+, -, /, *). Operate and set the next operation!

  // The user hasn't typed a number yet, just save the operation

  // save the operation and shift 'next' into 'total'
  
}
