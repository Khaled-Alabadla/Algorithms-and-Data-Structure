# 1. Reverse a String Using a Stack
def reverse(text):
    """Reverses the given string using a stack."""
    stack = []
    
    # Push each character onto the stack
    for char in text:
        stack.append(char)
    
    reversed_text = ''
    # Pop characters from stack to get reverse order
    while stack:
        reversed_text += stack.pop()
    
    return reversed_text

# 2. For each temperature find how many days until a warmer temperature.
# ex: [22, 18, 28, 32, 25, 20, 23]
# out: [2, 1, 1, 0, 0, 1, 0]
def dailyTemperatures(temperatures):
    """Returns list of days until warmer temperature for each day."""
    n = len(temperatures)
    ans = [0] * n 

    # For each day, find the next warmer day
    for i in range(n):
        for j in range(i + 1, n):
            if temperatures[j] > temperatures[i]:
                ans[i] = j - i  
                break          
                
    return ans

# 3. First Non-Repeating Character in a Stream. As characters arrive return the first non-repeating one.
def first_non_repeating_stream(stream):
    """Returns string of first non-repeating chars as stream is processed."""
    count = {}
    order = []
    result = []

    for char in stream:
        # Update count for the character
        if char in count:
            count[char] += 1
        else:
            count[char] = 1
            order.append(char)
            
        # Remove characters that are no longer unique
        while len(order) > 0 and count[order[0]] > 1:
            order.pop(0)
            
        # Append the first unique character or '#'
        if len(order) > 0:
            result.append(order[0]) 
        else:
            result.append("#") 
            
    return "".join(result) 

print(first_non_repeating_stream("aabcbc"))