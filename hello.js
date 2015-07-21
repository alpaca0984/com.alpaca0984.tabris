var page = tabris.create("Page", {
  title: "Create Memo",
  topLevel: true
});
console.log(window.Connection);

var button = tabris.create("Button", {
  text: "create TextInput",
  layoutData: {centerX: 0, bottom: 50}
}).appendTo(page);

var hash = {};
for (var i = 1; i < 6; i++) {
  var id = "text_field_input_" + i;
  var attrTop = (1 < i) ? ["#text_field_input_" + (i - 1), 18] : 18;
  tabris.create("TextInput", {
    id: id,
    message: "text"
  }).appendTo(page);
  hash["#" + id] = {layoutData: {left: 15, top: attrTop, width: 240}};
}
page.apply(hash);

page.open();
