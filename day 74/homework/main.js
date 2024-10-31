const createElements = () => {
    for (let i = 0; i < 5; i++) {
        const para = document.createElement("p");
        para.innerText = `Paragraph number${i + 1}`;
        document.body.appendChild(para);
    }
};

const appendChildExample = () => {
    const div = document.createElement("div");
    div.innerText = "This is a new div";
    document.body.appendChild(div);
};

const insertBeforeExample = () => {
    const newPara = document.createElement("p");
    newPara.innerText = "Inserted Paragraph";
    const referenceNode = document.querySelector("p");
    document.body.insertBefore(newPara, referenceNode);
};

const removeChildExample = () => {
    const paraToRemove = document.querySelector("p");
    if (paraToRemove) {
        document.body.removeChild(paraToRemove);
    }
};

const parentNodeExample = () => {
    const paraa = document.createElement("p");
    paraa.innerText = "Parent Node Example";
    document.body.appendChild(paraa);
    const parent = paraa.parentNode;
    console.log(parent);
};

const replaceChildExample = () => {
    const oldPara = document.createElement("p");
    oldPara.innerText = "Old Paragraph";
    document.body.appendChild(oldPara);
    
    const newPara = document.createElement("p");
    newPara.innerText = "New Replaced Paragraph";
    
    const parentDiv = oldPara.parentNode;
    parentDiv.replaceChild(newPara, oldPara);
};

createElements();
appendChildExample();
insertBeforeExample();
removeChildExample();
parentNodeExample();
replaceChildExample();