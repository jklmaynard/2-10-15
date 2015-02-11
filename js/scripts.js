var titleCase = function(string) {
  if (string === "") {
    var result = "Whoops! You didn't enter anything, genius.";
    return result;
  } else {
    var words = string.toLowerCase().split(" ");
    var result = [];
    var subsentence = false;
    var exceptions = [
                      "a", "an", "and", "as", "at",
                      "but", "by",
                      "en",
                      "for",
                      "if", "in", "into",
                      "of", "on", "or",
                      "the", "to",
                      "v", "v.", "via", "vs", "vs.",
                      "with"
                      ];
    var capitalize = function(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }

    words.forEach(function(word) {
      if (exceptions.indexOf(word) === -1) {
        word = capitalize(word);
      }

      if (subsentence === true) {
        word = capitalize(word);
        subsentence = false;
      }
      if (word.match(/[:.;?!]/)) {
        subsentence = true;
      }

      result.push(word);
    });

    var firstWord = [capitalize(result.shift())];
    result = firstWord.concat(result);
    var lastWord = [capitalize(result.pop())];
    result = result.concat(lastWord);

    return result.join(" ");
  }
};

$(document).ready(function() {
  $("form#title-case").submit(function(event) {
    var result = titleCase($("input#title").val());
    $(".title").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
