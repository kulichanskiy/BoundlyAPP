from flask import Flask, request, render_template
import telebot
import os
from jinja2 import Environment, FileSystemLoader

app = Flask(__name__)

BOT_TOKEN = "-"
bot = telebot.TeleBot(BOT_TOKEN)

# Главная страница веб-приложения
@app.route('/')
def home():
    server_root = os.path.dirname(os.path.abspath(__file__))
    client_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'client')
    env = Environment(loader=FileSystemLoader(client_folder))
    template_folder = os.path.join(server_root, 'client')  # Убедитесь, что клиентская папка правильно указана
    
    # Загружаем шаблон из папки клиента
    rendered_template = render_template('main_window.html')  # Рендерим шаблон с Flask
    
    return rendered_template  # Возвращаем HTML-страницу

# Endpoint для Telegram Webhook
@app.route('/webhook', methods=['POST'])
def telegram_webhook():
    update = telebot.types.Update.de_json(request.stream.read().decode("utf-8"))
    bot.process_new_updates([update])
    return "OK", 200

# Пример обработчика сообщений Telegram
@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, "Добро пожаловать в Boundly! Свайпайте направо или налево, чтобы находить людей!")

if __name__ == "__main__":
    app.run(debug=True, port=5000)
