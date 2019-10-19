/**
 * 关系运算符
 * 关系运算符包括==, !=, >, <, >=, <=
 */

const IS_ASSIGNMENT = Symbol('tokenIsAssignment');
const IS_NOT_ASSIGNMENT = Symbol('tokenIsNotAssignment');
const GREATER_THAN = Symbol('tokenGreaterThan');                      // >
const GREATER_ASSIGNMENT_THAN = Symbol('tokenGreaterAssignmentThan')  // >=
const SMALLER_THAN = Symbol('tokenSmallerThan');
const SMALLER_ASSIGNMENT_THAN = Symbol('tokenSmallerAssignmentThan');

module.exports = {
    IS_ASSIGNMENT,
    IS_NOT_ASSIGNMENT,
    GREATER_THAN,
    SMALLER_THAN,
    GREATER_ASSIGNMENT_THAN,
    SMALLER_ASSIGNMENT_THAN,
}