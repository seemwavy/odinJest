const value = require('./value');
test('Get statement of matching value', () => {
    expect(value("value", "matched")).toEqual("value matched")
    });
    test("There's no I in team", () => {
        expect("team").not.toMatch(/I/);
    });
    test('but there is a "me" in team', () => {
        expect("team").toMatch(/eam/);
    });