import socket

def send_message(text, shift):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect(('localhost', 65432))
        message = f"{text},{shift}"
        s.sendall(message.encode())
        data = s.recv(1024).decode()
        return data

if __name__ == '__main__':
    text = input("Enter message to encrypt: ")
    while True:
        try:
            shift = int(input("Enter shift value (integer): "))
            break
        except ValueError:
            print("Invalid shift value. Please enter an integer.")

    response = send_message(text, shift)
    print(response)
