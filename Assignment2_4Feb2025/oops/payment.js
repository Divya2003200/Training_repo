// Abstract Base Class
class Payment {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }

    processPayment() {
        throw new Error("processPayment() must be implemented in subclasses");
    }
}


class CreditCardPayment extends Payment {
    #cardNumber;

    constructor(amount, date, cardNumber) {
        super(amount, date);
        this.#cardNumber = cardNumber;
    }

    processPayment() {
        return "Processing credit card payment of Rs. " + this.amount + " on " + this.date + ".";
    }
}

class PayPalPayment extends Payment {
    #cardNumber

    constructor(amount, date, cardno) {
        super(amount, date);
        this.#cardNumber = cardno;
    }

    processPayment() {
        return "Processing PayPal payment of Rs. " + this.amount + " on " + this.date + " via " + this.#cardNumber + ".";
    }
}


class CryptoPayment extends Payment {
    #cryptoWalletID;

    constructor(amount, date, walletID) {
        super(amount, date);
        this.#cryptoWalletID = walletID;
    }

    processPayment() {
        return "Processing Crypto payment of Rs. " + this.amount + " on " + this.date + ".";
    }
}


const payment1 = new CreditCardPayment(5000, "2025-02-04", "1234-XXXX-XXXX-5678");
console.log(payment1.processPayment());

const payment2 = new PayPalPayment(3000, "2025-02-04", "2569");
console.log(payment2.processPayment());

const payment3 = new CryptoPayment(8000, "2025-02-04", "WALLET123XYZ");
console.log(payment3.processPayment());
