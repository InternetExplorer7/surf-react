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

  // Step 2:
  // If button is number 
  // if the button is equal to zero and the next number to be operated on is equal to zero,
  // then return an empty object.

  // If there exists an operation, and if there exists a next number to be operated on,
  // then return an object with next where the new next is the sum of our previous next number to be operated on and the number entered.
  // Otherwise, return next to be the button name. 

  // If there exists a next number but no operation, then return an object with a null total (reset) and update  our new next with prev next + button name.

  // Lastly, if the buttonName is a number but there exists no previous operation or next, then return our next to be our button name and reset the total.

  // Step 3:
  // If the button entered was a decimal point ("."), then simply append it to our button, since the user is asking to create a decimal point number.
  // If there already exists a next number to operate on, and if that next numnber already includes a ".", then return an empty object (nothing updates.)
  // Likewise, if there does exist a next but not a decimal point, then add the decimal point to the number.

  // If there exists some operation already, but not a next, then return next to be "0.".

  // If there exists a total, but no operation or next value, check if the total already includes a decimal point. 
  // If yes, then return an empty object. (no changes made.)
  // Otherwise, if there doesn't already exist a decimal point in the answer, then return the total + "."

  // Otherwise, return "0." for the total.

  // Step 4: If the button name is "=", and if next and operation exist, then return a calculated value for the total and nullify everything else (next & operation.)
  //  Otherwise, return an empty object if there for some reason exists no next and operation values.

  // Step 5: If the button name is "+/-", and if there exist a next operation, simply negate the current value of next. (hint: make sure to retain accuracy!)

  // Step 6: the user entered an operation (+, -, /, *). Operate and set the next operation!

  // The user hasn't typed a number yet, just save the operation

  // save the operation and shift 'next' into 'total'
  
}
