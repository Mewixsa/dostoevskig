bbt1 = document.getElementById("btt1");
bbt2 = document.getElementById("btt2");
bbt3 = document.getElementById("btt3");
main1 = document.getElementsByClassName("main1")[0];
main2 = document.getElementsByClassName("main2")[0];
main3 = document.getElementsByClassName("main3")[0];

function main1f() {
    main1.classList.remove("none");
    main2.classList.add("none");
    main3.classList.add("none");
    bbt1.classList.add("now");
    bbt2.classList.remove("now");
    bbt3.classList.remove("now");
}
function main2f() {
    main2.classList.remove("none")
    main1.classList.add("none");
    main3.classList.add("none");
    bbt2.classList.add("now");
    bbt1.classList.remove("now");
    bbt3.classList.remove("now");
}
function main3f() {
    main3.classList.remove("none")
    main1.classList.add("none");
    main2.classList.add("none");
    bbt1.classList.remove("now");
    bbt2.classList.remove("now");
    bbt3.classList.add("now");
}
