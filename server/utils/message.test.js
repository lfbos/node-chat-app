let expect = require('expect');
let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message', () => {
        let from = 'john';
        let text = 'message';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
   it('should generate correct location object', () => {
        let from = 'john';
        let latitude = 12;
        let longitude = 13;
        let url = 'https://www.google.com/maps?q=12,13';
        let message = generateLocationMessage(from, latitude, longitude);
        expect(message.createdAt).toBeA('number');
        expect(message.url).toBe(url);
   });
});