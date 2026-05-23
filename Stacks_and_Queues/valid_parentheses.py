# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

def isValid(s: str) -> bool:
    stack = ['']
    
    for char in s:
        # 1. If it's an opening bracket, push it onto the stack
        if char == '(':
            stack.append(')')
        elif char == '{':
            stack.append('}')
        elif char == '[':
            stack.append(']')
            
        # 2. If it's a closing bracket:
        # Check if the stack is empty OR if it doesn't match the top
        elif len(stack) == 0 or stack.pop() != char:
            return False
            
    # 3. If the stack is empty at the end, it's valid
    return len(stack) == 0

print(isValid("()"))       # True
print(isValid("()[]{}"))   # True
print(isValid("(]"))       # False