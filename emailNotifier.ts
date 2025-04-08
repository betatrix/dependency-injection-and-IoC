interface Notifier {
    send(to: string, message: string): void;
}

class EmailService implements Notifier {
    send(email: string, message: string) {
        console.log(`📧 Enviando email para ${email}: ${message}`);
    }
}

class SmsService implements Notifier {
    send(phone: string, message: string) {
        console.log(`📱 Enviando SMS para ${phone}: ${message}`);
    }
}

class UserNotification {
    // Forma curta de declarar o construtor, salvando o parâmetro como propriedade automaticamente (é necessário declarar o tipo de visibilidade!)
    constructor(private notifier: Notifier) {}

    notify(user: string, msg: string) {
        this.notifier.send(user, msg);
    }
}
  
// Via email:
const emailService = new EmailService();
const userNotification1 = new UserNotification(emailService);
userNotification1.notify("user@example.com", "Bem-vindo!");

// Via SMS:
const smsService = new SmsService();
const userNotification2 = new UserNotification(smsService);
userNotification2.notify("+5511999999999", "Seu código é 1234");
    