function view() {
	let html = "";
	for (let i = 0; i < model.data.items.length; i++) {
		html += `
        <div class="media">
            <div><img src=${model.data.items[i].thumbnail} /></div>
            <div>${model.data.items[i].title}</div>
            
        </div>
        `;
	}
	document.getElementById("app").innerHTML = html;
}
view();

// CURSOR GARAGE //                                      //

//create a for loop to iterate through the items in the model
// function controller() {
// 	if (model.data.items.length === 0) {
// 		model.save("items", [
// 			{
// 				text: "This is a todo item. Click the checkbox to mark it as completed.",
// 				completed: false,
// 			},
// 		]);
// 	}
// 	view();
// }
// controller();
