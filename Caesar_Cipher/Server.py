import socket
     

def caesar_cipher(text, shift):
    result = ''
    for char in text:
        if char.isalpha():
            # Handle uppercase and lowercase separately for proper wrapping
            if char.isupper():
                new_char = chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
            else:
                new_char = chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
            result += new_char
        else:
            # Preserve non-alphabetic characters
            result += char
    return result

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    print('Waiting for connection...')
    s.bind(('localhost', 65432))
    s.listen()
    conn, addr = s.accept()
    with conn:
        print(f'Connected by {addr}')
        while True:
            data = conn.recv(1024).decode()
            if not data:
                break
            try:
                text, shift = data.split(',')  # Expect comma-separated text and shift
                shift = int(shift)  # Ensure shift is an integer
                encrypted_text = caesar_cipher(text, shift)
                conn.sendall(f"Message encrypted Succesfully".encode())
                print(f'Encrypted message: {encrypted_text}')
            except ValueError:  # Handle invalid shift value
                conn.sendall(b"Error: Invalid shift value. Please enter an integer.")
            except Exception as e:  # Catch any unexpected errors
                print(f"Error: {e}")
                conn.sendall(b"Error: An unexpected error occurred.")
