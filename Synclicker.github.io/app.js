let crayonBox = document
	.getElementById(crayon)
	.addEventListener(onClick, addToTotal);

function addToTotal(totalCrayons) {
	totalCrayons += 1 * clickMultiplier;
	return totalCrayons;
}
