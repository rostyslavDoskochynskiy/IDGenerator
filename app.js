const app = (function () {
    const symbol = 'qwertyuiopasdfghjklzxcvbnm1234567890';

    const generateId = () => {
        let newStr = symbol.split('');
        let randomSymbol = '';
        let generatedId = '';
        for (let i = 0; i < 50; i++) {
            let random = Math.floor(Math.random() * newStr.length);
            randomSymbol += newStr[random];
            generatedId += randomSymbol[i];
        }
        return generatedId;
    };

    return {
        generateId
    }
}());