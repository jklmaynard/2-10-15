describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes the first letter of two words", function() {
    expect(titleCase("cat hat")).to.equal("Cat Hat")
  });

  it("will title case an input that is all uppercase", function() {
    expect(titleCase("THE THERE CAT IN THE HAT")).to.equal("The There Cat in the Hat")
  });

  it("will keep lower case all articles, prepositions, and conjunctions unless first word", function() {
    expect(titleCase("THE CAT IN THE HAT")).to.equal("The Cat in the Hat")
  });

  it("will always capitalize the last word", function() {
    expect(titleCase("there is nothing to be afraid of")).to.equal("There Is Nothing to Be Afraid Of")
  });

  it("will give an error message if nothing is inputedlyingeresque", function() {
    expect(titleCase("")).to.equal("Whoops! You didn\'t enter anything, genius.")
  });

  it("will always capitalize the first word of a subsentence", function() {
    expect(titleCase("lkjsdfTLKJA the LKJthea: the fjklsdjfklfjklds of the jieoskehr, part I")).to.equal("Lkjsdftlkja the Lkjthea: The Fjklsdjfklfjklds of the Jieoskehr, Part I")
  });
});
