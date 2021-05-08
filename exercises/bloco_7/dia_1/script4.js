const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )
    let result = `${fun1(paramOne)}`;
    return result;
}
console.log(buildSkillsPhrase("Lucas", 'x'))