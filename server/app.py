# app.py (Flask backend)
from flask import Flask, jsonify, request
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return jsonify({'message': 'CDS Backend is running'})

@app.route('/upload', methods=['POST'])
def upload_data():
    data = request.json
    netIDs = data.get('netIDs', [])
    names = data.get('names', [])
    subject = data.get('subject', '')
    message_body = data.get('messageBody', '')

    if not netIDs or not names or not subject or not message_body:
        return jsonify({'error': 'Missing input fields'}), 400

    if len(netIDs) != len(names):
        return jsonify({'error': 'Number of NetIDs and names must match'}), 400

    emails = [(f"{netID}@cornell.edu", name) for netID, name in zip(netIDs, names)]

    try:
        for email, name in emails:
            send_email(email, name, subject, message_body)

        return jsonify({'status': 'Emails processed successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def send_email(email, name, subject, message_body):
    print(f"Sending email to {email}, {name}")

    try:
        sender_email = "ahmedalgaithie@gmail.com"
        password = "uomj mlgy vrqj cnaq"

        # Set up the email content
        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = email
        message["Subject"] = subject

        body = f"Hello {name},\n\n{message_body}"
        message.attach(MIMEText(body, "plain"))

        # Send the email using SMTP
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, password)
            server.sendmail(sender_email, email, message.as_string())

        print(f"Email sent to {email}")
    except Exception as e:
        print(f"Error sending email to {email}: {e}")


@app.route('/get-email-list', methods=['GET'])
def get_email_list():
    try:
        email_list_ref = db.collection('emailList')
        docs = email_list_ref.stream()

        email_list = []
        for doc in docs:
            email_list.append(doc.to_dict())

        return jsonify(email_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)
