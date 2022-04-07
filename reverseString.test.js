const reverseString = require("./reverseString")

test("testa se ao receber a palavra lua retorna ual", () => {
    expect(reverseString("lua")).toBe("aul");
});

test("testa se ao receber a palavra abacate retorna teacaba", () => {
    expect(reverseString("abacate")).toBe("etacaba");
});