const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'John',
            room: 'Room 1'
        }, {
            id: '2',
            name: 'Foo',
            room: 'Room 2'
        }, {
            id: '3',
            name: 'Doe',
            room: 'Room 1'
        }];
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '1',
            name: 'LF',
            room: 'Test room'
        };
        let resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
        expect(resUser).toEqual(user);
    });

    it('should remove a user', () => {
        var userId = '2';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '12';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '12';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for room 1', () => {
        let userList = users.getUserList('Room 1');

        expect(userList).toEqual(['John', 'Doe']);
    });

    it('should return names for room 2', () => {
        let userList = users.getUserList('Room 2');

        expect(userList).toEqual(['Foo']);
    });
});