# Password Generator

A simple web-based application to generate random passwords based on user preferences. This application allows users to specify the length of the password and select different character types such as uppercase letters, lowercase letters, numbers, and symbols.

## Features

- Generate a password of specified length.
- Option to include uppercase letters, lowercase letters, numbers, and symbols.
- Display the generated password.
- Copy the generated password to the clipboard with a single click.

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

### Prerequisites

- A modern web browser.

### Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/zamansikander/get-password.git
    cd password-generator
    ```

2. **Open the `index.html` file in your web browser:**
    ```bash
    open index.html
    ```

### UI Overview

- **Displayed Password**: The generated password is displayed here. You can copy it to the clipboard by clicking the clipboard icon.
- **Length**: Enter the desired length of the password.
- **Character Types**: Select the types of characters you want to include in the password (uppercase letters, lowercase letters, numbers, symbols).
- **Generate Button**: Click this button to generate the password based on your selections.

### Example

1. Open the application.
2. Enter the desired length of the password.
3. Select the character types you want to include.
4. Click on the "Generate Password" button.
5. The generated password will be displayed in the input field.
6. Click the clipboard icon to copy the password to your clipboard.

## File Structure

```plaintext
password-generator/
│
├── index.html           # The main HTML file
├── styles.css           # CSS file for styling
├── script.js # JavaScript logic for generating the password
├── README.md            # This README file