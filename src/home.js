const content = () => {
    console.log('2nd module!')

    const header_node = document.querySelector('#content');

    const title = document.createElement('h1');
    title.innerHTML = `Welcome to Rob's Sausage Warehouse`;

    const h3 = document.createElement('h3');
    h3.innerHTML = `This is probably the best restaurant in Burnage, with probably the best website you've ever visited.`;

    const para = document.createElement('p');
    para.innerHTML = `We welcome you to explore this website, and to consider your life options. Why are you here? Don't you have anything better to do?`

    header_node.appendChild(title);
    header_node.appendChild(h3);
    header_node.appendChild(para);


};

export default content;