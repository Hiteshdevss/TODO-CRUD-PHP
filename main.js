edits = document.getElementsByClassName('edit');
Array.from(editits).forEach((element) => {
    element.addEventListener('click', () => {
        console.log("edit", e.target.parentNode.parentNode);
        tr = e.target.parentNode.parentNode;
        title = tr.getElementsByTagName("td")[0].innerText;
        description = tr.getElementsByTagName("td")[1].innerText;
    });
})