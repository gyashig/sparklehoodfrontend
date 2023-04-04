const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');
const submitImage = document.querySelector('.submit-image');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

submitImage.addEventListener('click', function () {
	alert("sumitted");
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('pdf');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = "images.png";
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
        }
		reader.readAsDataURL(image);
	
})
