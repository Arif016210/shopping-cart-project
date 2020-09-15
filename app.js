//Mobile Plus Button Event Handler

const btnMobilePlus = document.getElementById('btnMobilePlus');
btnMobilePlus.addEventListener('click', function () {



    const mobileInput = document.getElementById('mobileInput').value;
    const mobileInputNumber = parseInt(mobileInput);
    const incrementMobile = mobileInputNumber + 1;
    document.getElementById('mobileInput').value = incrementMobile;

    const mobilePrice = document.getElementById('mobilePrice').innerText;
    const mobilePriceNumber = parseFloat(mobilePrice);
    const totalMobilePrice = mobilePriceNumber + 1219;
    document.getElementById('mobilePrice').innerText = totalMobilePrice;

    const subtotal = document.getElementById('subtotal').innerText;
    const subtotalNumber = parseFloat(subtotal);
    console.log(subtotalNumber);
    const subtotalPrice = subtotalNumber + 1219;
    document.getElementById('subtotal').innerText = subtotalPrice;

    const grandTotal = document.getElementById('grandTotal').innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber + 1219;
    document.getElementById('grandTotal').innerText = grandTotalPrice;



})

//Mobile Minus Button Event Handler


const btnMobileMinus = document.getElementById('btnMobileMinus');
btnMobileMinus.addEventListener('click', function () {

    const mobileInput = document.getElementById('mobileInput').value;
    const mobileInputNumber = parseInt(mobileInput);
    const decrementMobile = mobileInputNumber - 1;
    document.getElementById('mobileInput').value = decrementMobile;

    const mobilePrice = document.getElementById('mobilePrice').innerText;
    const mobilePriceNumber = parseFloat(mobilePrice);
    const totalMobilePrice = mobilePriceNumber - 1219;
    document.getElementById('mobilePrice').innerText = totalMobilePrice;

    const subtotal = document.getElementById('subtotal').innerText;
    const subtotalNumber = parseFloat(subtotal);
    console.log(subtotalNumber);
    const subtotalPrice = subtotalNumber - 1219;
    document.getElementById('subtotal').innerText = subtotalPrice;

    const grandTotal = document.getElementById('grandTotal').innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber - 1219;
    document.getElementById('grandTotal').innerText = grandTotalPrice;

})





//Cover Plus Button Event Handler

const btnCoverPlus = document.getElementById('btnCoverPlus');
btnCoverPlus.addEventListener('click', function () {

    const coverInput = document.getElementById('coverInput').value;
    const coverInputNumber = parseInt(coverInput);
    const incrementCover = coverInputNumber + 1;
    document.getElementById('coverInput').value = incrementCover;

    const coverPrice = document.getElementById('coverPrice').innerText;
    const coverPriceNumber = parseFloat(coverPrice);
    const totalCoverPrice = coverPriceNumber + 59;
    document.getElementById('coverPrice').innerText = totalCoverPrice;

    const subtotal = document.getElementById('subtotal').innerText;
    const subtotalNumber = parseFloat(subtotal);
    const subtotalPrice = subtotalNumber + 59;
    document.getElementById('subtotal').innerText = subtotalPrice;

    const grandTotal = document.getElementById('grandTotal').innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber + 59;
    document.getElementById('grandTotal').innerText = grandTotalPrice;


})

//Cover Minus Button Event Handler


const btnCoverMinus = document.getElementById('btnCoverMinus');
btnCoverMinus.addEventListener('click', function () {

    const coverInput = document.getElementById('coverInput').value;
    const coverInputNumber = parseInt(coverInput);
    const decrementCover = coverInputNumber - 1;
    document.getElementById('coverInput').value = decrementCover;

    const coverPrice = document.getElementById('coverPrice').innerText;
    const coverPriceNumber = parseFloat(coverPrice);
    const totalCoverPrice = coverPriceNumber - 59;
    document.getElementById('coverPrice').innerText = totalCoverPrice;

    const subtotal = document.getElementById('subtotal').innerText;
    const subtotalNumber = parseFloat(subtotal);
    const subtotalPrice = subtotalNumber - 59;
    document.getElementById('subtotal').innerText = subtotalPrice;

    const grandTotal = document.getElementById('grandTotal').innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber - 59;
    document.getElementById('grandTotal').innerText = grandTotalPrice;
})


//Mobile Cross Button Event Handler

const crossMobile = document.getElementById('crossMobile');
crossMobile.addEventListener('click', function () {
    const mobileCart = document.getElementById('mobileCart');
    mobileCart.style.display = "none";
})

//Mobile-Cover Cross Button Event Handler

const crossCover = document.getElementById('crossCover');
crossCover.addEventListener('click', function () {
    const coverCart = document.getElementById('coverCart');
    coverCart.style.display = "none";
})


//Submit Button Event Handler

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', function () {
    const cart = document.getElementById('cart');
    cart.style.display = "none";

    const greeting = document.getElementById('greeting');
    greeting.style.display = "block";
})



