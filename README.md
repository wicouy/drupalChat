# Drupal Chat Module

This repository provides a minimal Drupal module that renders a simple chat interface. The chat communicates with a microservice using HTTP requests.

## Installation

1. Copy the `drupal_chat` directory into your Drupal project's `modules` folder.
2. Enable the **Drupal Chat** module from the Drupal administration interface.
3. Place the "Drupal Chat" block in a region of your theme.

## Configuration

The module uses the microservice located at:

```
http://eintelligent-003-site16.qtempurl.com/api/drupal-ai/ask
```

No additional configuration is required.

## Usage

Enter a question in the chat input and press **Enviar**. The module will send the text to the microservice and display the response inside the chat window.

The interface is styled with a small CSS file that exposes the following color variables:

```
:root {
  --color-primario: #004a93;
  --color-secundario: #00a0e8;
  --color-fondo: #ffffff;
  --color-texto: #333333;
  --color-texto-secundario: #666666;
  --color-borde: #dddddd;
}
```

Feel free to adjust these colors to match your theme.
