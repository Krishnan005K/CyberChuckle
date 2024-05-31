def caesar_cipher(text, shift):
    result = ""
    
    # Traverse the text
    for i in range(len(text)):
        char = text[i]
        
        # Encrypt uppercase characters
        if char.isupper():
            result += chr((ord(char) + shift - 65) % 26 + 65)
        
        # Encrypt lowercase characters
        elif char.islower():
            result += chr((ord(char) + shift - 97) % 26 + 97)
        
        # Append non-alphabet characters as they are
        else:
            result += char
    
    return result

# Get input from the user
plaintext = input("Enter the text to be encrypted: ")
shift = int(input("Enter the shift value: "))

# Encrypt the input text
encrypted_text = caesar_cipher(plaintext, shift)

# Display the result
print(f"Plaintext: {plaintext}")
print(f"Encrypted Text: {encrypted_text}")
